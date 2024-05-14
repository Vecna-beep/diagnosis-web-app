(function newFact() {
  var facts = ["There are more bacteria in your mouth than there are people in the world.",
    "Laughing is good for the heart and can increase blood flow by 20 percent.",
    "Your skin works hard. Not only is it the largest organ in the body, but it regulates your temperature and defends against disease and infection.",
    "Always look on the bright side: being an optimist can help you live longer.",
    "Exercise will give you more energy, even when you’re tired.",
    "Sitting and sleeping are great in moderation, but too much can increase your chances of an early death.",
    "A lack of exercise now causes as many deaths as smoking.",
    "39% of adults in the world are overweight.",
    "Between 2000 and 2015, the average global life expectancy increased by five years.",
    "Less than 1% of Americans ride their bike to work, while 50% of Copenhagen residents bike to work or school."
  ];
  var mentalfacts = ["Learning a new language or playing a musical instrument gives your brain a boost.",
    "Feeling stressed? Read. Getting lost in a book can lower levels of cortisol, and other unhealthy stress hormones, by 68%.",
    "Maintaining good relationships with your friends and family, reduces harmful levels of stress and boosts your immune system.",
    "Drinking coffee can reduce the risk of depression, especially in women.",
    "Smelling rosemary may increase alertness and improve memory so catch a whiff before a test or important meeting.",
    "Swearing can make you feel better when you’re in pain.",
    "Writing in a journal can make you a happier person!",
    "Chewing gum makes you more alert, relieves stress and reduces anxiety levels.",
    "Yoga can boost your cognitive function and lower stress.",
    "Walking outside – or spending time in green space – can reduce negative thoughts and boost self-esteem."
  ];
  var foodfacts = ["Chocolate is good for your skin; its antioxidants improve blood flow and protect against UV damage.",
    "Almonds, avocados and arugula (the three ‘A’s) can improve fertility.",
    "Tea can lower risks of heart attack, certain cancers, type 2 Diabetes and Parkinson’s disease. Just make sure your tea isn’t too sweet!",
    "Eating oatmeal provides a serotonin boost to calm the brain and improve your mood.",
    "Although it only takes you a few minutes to eat a meal, it takes your body hours to completely digest the food.",
    "Women below the age of 50 need twice the amount of iron per day as men of the same age.",
    "An apple a day does keep the doctor away. Apples can reduce levels of bad cholesterol to keep your heart healthy.",
    "The amino acid found in eggs can help improve your reflexes.",
    "Extra virgin olive oil is the healthiest fat on the planet.",
    "Vitamin D is as important as calcium in determining bone health, and most people don’t get enough of it."
  ];
  var fitnessfacts = ["There are five main components of fitness: the body’s ability to use oxygen, muscular strength, endurance, flexibility and body composition.",
    "The body has more than 650 muscles.",
    "Sleeping naked can help you burn more calories.",
    "Walking at a fast pace for three hours or more at least once a week, you can reduce your risk of heart disease by up to 65%.",
    "Even at rest, muscle is three times more efficient at burning calories than fat.",
    "Regular activity can ease the severity and reduce the frequency of lower back pain.",
    "Running is good for you. People who run 12-18 miles a week have a stronger immune system and can increase their bone mineral density.",
    "Exercising regularly can increase your lifespan by keeping your DNA healthy and young.",
    "The average moderately active person walks approximately 7,500 steps a day, which is the lifetime equivalent of walking around the Earth five times.",
    "Stretching increases the blood flow to your muscles and helps avoid injuries."
  ];
  var hydrationfacts = ["Drinking at least five glasses of water a day can reduce your chances of suffering from a heart attack by 40%.",
    "Dehydration can have a negative impact on your mood and energy levels. Drink enough water to ensure you’re always at your best.",
    "Consuming water helps the body maintain its natural pH balance.",
    "Repeatedly using plastic water bottles can release chemicals into your water. Why not try a reusable bottle instead? It’s good for you and the planet.",
    "The spinal disc core is comprised of a large volume of water therefore dehydration could lead to back pain.",
    "Kidneys filter your blood up to 300 times a day and need water to function optimally.",
    "Hydration is key for a good complexion. Drinking enough water also makes you less prone to wrinkles.",
    "A lack of water can cause a range of problems, such as constipation, asthma, allergy and migraines.",
    "Water can aid in weight loss because it helps to remove the by-products of fat and if consumed before a meal can make you more satisfied and eat less.",
    "Your muscles and joints require water in order to stay energized, lubricated and healthy."
  ];
  var practices = ["Massage isn’t just for the muscles. It can help scars fade, and can be more beneficial than lotion or oil.",
    "Brushing teeth too soon after eating or drinking can soften the tooth enamel, especially if you’ve just been eating or drinking acidic foods.",
    "Want to slow the aging process? Meditation is proven to help!",
    "Indoor air pollution can be even worse than outside.",
    "SPF 50 allows only two percent of UVB rays to pass to your skin compared to seven percent when wearing only SPF 15.",
    "The blue light from your phone can mess with your circadian rhythm.",
    "Feeling down? Plan a vacation. Not only will getting away make you feel better, but planning and anticipating the vacation will also give you a happiness boost.",
    "Cardio exercise before breakfast can burn more fat.",
    "Wild-caught fish, grass-fed meats and free-range eggs are simple ways to inject healthy changes to your diet without drastically altering what you eat.",
    "Breathing deeply in moments of stress, or anytime during the day, brings many benefits such as better circulation, decreased anxiety and reduced blood pressure."
  ];
  var random = ["‘Gymnasium’ comes from the Greek word ‘gymnazein’, meaning ‘to exercise naked’.",
    "On average, there are more bacteria per square inch in a kitchen sink than the bathroom.",
    "The nose knows: it can remember 50,000 different scents.",
    "Humans have 46 chromosomes, while peas have 14 and crayfish have 200.",
    "During an allergic reaction your immune system is responding to a false alarm that it perceives as a threat.",
    "Left-handed people are more likely to suffer from ADHD.",
    "The eye muscles are the most active in the body, moving more than 100,000 times a day!",
    "Humans can cough at 60 miles an hour and sneezes can be 100 miles an hour – which is faster than the average car!",
    "Although bodies stop growing, noses and ears will not.",
    "The soles of your feet contain more sweat glands and nerve endings per square inch than anywhere else on your body."
  ];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
  document.getElementById('mentalfactDisplay').innerHTML = mentalfacts[randomFact];
  document.getElementById('foodfactDisplay').innerHTML = foodfacts[randomFact];
  document.getElementById('fitnessfactDisplay').innerHTML = fitnessfacts[randomFact];
  document.getElementById('fitnessfactDisplay').innerHTML = fitnessfacts[randomFact];
  document.getElementById('hydrationfactDisplay').innerHTML = hydrationfacts[randomFact];
  document.getElementById('hydrationfactDisplay').innerHTML = hydrationfacts[randomFact];
  document.getElementById('practicesfactDisplay').innerHTML = practices[randomFact];
  document.getElementById('randomfactDisplay').innerHTML = random[randomFact];
})();
