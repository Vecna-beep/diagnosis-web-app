from flask import render_template, url_for, flash, redirect, request
from flaskblog import app, db, bcrypt
from flaskblog.forms import RegistrationForm, LoginForm
from flaskblog.models import User
from flask_login import login_user, current_user, logout_user, login_required
import csv
from newsapi import NewsApiClient
from flaskblog.diseaseprediction import dosomething

@app.route('/')
@app.route('/home/')
def home():
    return render_template("home.html")

@app.route('/about/')
def about():
    return render_template("about.html")

@app.route('/contact/')
def contact():
    return render_template("contact.html")

@app.route('/login/', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            flash('You have successfully logged in', 'success')
            return redirect(next_page) if next_page else redirect(url_for('home'))
        else:
            flash('Login Unsuccessful. Please check username and password', 'danger')
    return render_template("login.html", form=form)

@app.route('/register/', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('home'))
    form = RegistrationForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
        user = User(username=form.username.data, email=form.email.data, password=hashed_password)
        db.session.add(user)
        db.session.commit()
        flash('Your account has been created! You are now able to log in', 'success')
        return redirect(url_for('login'))
    return render_template("register.html", form=form)

@app.route("/logout")
def logout():
    logout_user()
    flash('User successfully logged out.', "success")
    return redirect(url_for('home'))

@app.route("/account")
@login_required
def account():
    return render_template('account.html')

@app.route('/changeEmail')
@login_required
def change_email():
    return render_template('change-email.html')

@app.route('/changePassword')
@login_required
def change_password():
    return render_template('change-password.html')

@app.route('/guideline')
def guideline():
    return render_template('guideline.html')

@app.route('/checkup')
def checkup():
    return render_template('checkup.html')

with open('flaskblog/Testing.csv', newline='') as f:
        reader = csv.reader(f)
        symptoms = next(reader)
        symptoms = symptoms[:len(symptoms)-1]

@app.route('/', methods=['GET'])
def dropdown():
        return render_template('templates/checkup.html', symptoms=symptoms)

@app.route('/disease_predict', methods=['GET', 'POST'])
def disease_predict():
    selected_symptoms = []
    if(request.form['Symptom1']!="") and (request.form['Symptom1'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom1'])
    if(request.form['Symptom2']!="") and (request.form['Symptom2'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom2'])
    if(request.form['Symptom3']!="") and (request.form['Symptom3'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom3'])
    if(request.form['Symptom4']!="") and (request.form['Symptom4'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom4'])
    if(request.form['Symptom5']!="") and (request.form['Symptom5'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom5'])

    # disease_list = []
    # for i in range(7):
    #     disease = diseaseprediction.dosomething(selected_symptoms)
    #     disease_list.append(disease)
    # return render_template('disease_predict.html',disease_list=disease_list)
    disease = dosomething(selected_symptoms)
    return render_template('disease_predict.html',disease=disease,symptoms=symptoms)

@app.route('/forgot_password')
def forgot_password():
    return render_template('forgot_password.html')

@app.route('/terms')
def terms():
    return render_template('terms.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/prevention')
def prevention():
    return render_template('prevention.html')

@app.route('/healthcenter')
def healthcenter():
    newsapi = NewsApiClient(api_key='e199baf26faf43349465edc421e099c4')
    top_headlines = newsapi.get_top_headlines(category='health')

    articles = top_headlines['articles']
    desc = []
    news = []
    img = []
    url = []
    for i in range(len(articles)):
        myarticles = articles[i]

        news.append(myarticles['title'])
        desc.append(myarticles['description'])
        img.append(myarticles['urlToImage'])
        url.append(myarticles['url'])
    
    mylist = zip(news, desc, img, url)

    return render_template('healthcenter.html', context = mylist)

@app.route('/obesity')
def obesity():
    return render_template('obesity.html')

@app.route('/diabetes')
def diabetes():
    return render_template('diabetes.html')

@app.route('/asthma')
def asthma():
    return render_template('asthma.html')

@app.route('/hypertension')
def hypertension():
    return render_template('hypertension.html')

@app.route('/backpain')
def backpain():
    return render_template('backpain.html')