// scenarios.js
// A bank of pre-written experimental scenario paragraphs for the
// Biology Experimental Scenario Generator, PLUS the answer key data
// used by the "Random Test Practice" quiz feature.
//
// Scenarios are written short and direct (roughly an advanced 8th
// grade / early 9th grade reading level) so EL and Special Education
// students can access them independently. Each scenario names the
// measurement being taken with an explicit keyword ("measures",
// "collects data on") and about half open with that measurement
// sentence FIRST and the groups/setup SECOND (the rest do the
// reverse), so students can't just assume "whatever is mentioned
// last is the IV."
//
// Each topic is a list of scenario objects with:
//   text          - the scenario paragraph (no labeled IV/DV/groups)
//   iv            - the correct independent variable, in plain words
//   dv            - the correct dependent variable, in plain words
//   ivChoices     - 4 possible answers for "What is the IV?" (correct + 3 distractors)
//   dvChoices     - 4 possible answers for "What is the DV?" (correct + 3 distractors)
//   explanation   - shown to students after they answer, explaining the correct answer
//   ivHighlights  - exact substrings of `text` to color-code blue (IV) on the
//                   main "Generate Scenario" view ONLY (never on the quiz,
//                   which always shows plain, unhighlighted text)
//   dvHighlights  - exact substrings of `text` to color-code red (DV), same rule
//
// To add more variety later, copy an existing object inside any topic's
// array and edit its fields. If you add ivHighlights/dvHighlights, each
// string must appear character-for-character somewhere in that scenario's
// "text" or the highlighting simply won't show for that phrase.

const scenarios = {
  "Animals": [
    {
      "text": "The student collects data on how many pillbugs are moving versus resting in each container. Ten pillbugs sit in a container with a dry paper towel, and ten more sit in an identical container with a damp paper towel, and the check happens after twenty minutes.",
      "iv": "Whether the paper towel was dry or damp",
      "dv": "How many pillbugs were active (moving) versus resting",
      "ivChoices": [
        "Whether the paper towel was dry or damp",
        "How many pillbugs were active (moving) versus resting",
        "The size of the plastic container",
        "The amount of time the pillbugs were observed"
      ],
      "dvChoices": [
        "How many pillbugs were active (moving) versus resting",
        "Whether the paper towel was dry or damp",
        "The type of mesh covering used",
        "The room the containers were kept in"
      ],
      "explanation": "The factor that was changed on purpose was the moisture of the paper towel (dry vs. damp) — that's the independent variable. What was measured, and could change as a result, was how many pillbugs were moving versus resting — that's the dependent variable. The container size and observation time were kept the same in both containers, so they can't be the answer.",
      "ivHighlights": [
        "a dry paper towel",
        "a damp paper towel"
      ],
      "dvHighlights": [
        "how many pillbugs are moving versus resting in each container"
      ]
    },
    {
      "text": "Five crickets live in a mesh enclosure at room temperature, and five more live in an identical enclosure warmed with a heating pad. After the crickets settle, the student measures the number of chirps per minute in each enclosure.",
      "iv": "The temperature of the cricket enclosure",
      "dv": "The number of chirps per minute",
      "ivChoices": [
        "The temperature of the cricket enclosure",
        "The number of chirps per minute",
        "The type of bedding in the enclosure",
        "The amount of food and water given"
      ],
      "dvChoices": [
        "The number of chirps per minute",
        "The temperature of the cricket enclosure",
        "The type of bedding in the enclosure",
        "How long the crickets were allowed to settle"
      ],
      "explanation": "Temperature was the one thing purposely changed between the two enclosures, making it the independent variable. The chirp count is what was measured to see if it changed, making it the dependent variable. Bedding, food, water, and settling time were identical in both enclosures.",
      "ivHighlights": [
        "room temperature",
        "warmed with a heating pad"
      ],
      "dvHighlights": [
        "the number of chirps per minute in each enclosure"
      ]
    },
    {
      "text": "The student measures how many times each fish's gill covers open and close in one minute. One aquarium holds water at room temperature, and an identical aquarium holds water warmed slightly with a heater, and the fish are given time to adjust before counting begins.",
      "iv": "The temperature of the aquarium water",
      "dv": "The number of times the gill covers opened and closed per minute",
      "ivChoices": [
        "The temperature of the aquarium water",
        "The number of times the gill covers opened and closed per minute",
        "The size of the aquarium tank",
        "The number of goldfish in each tank"
      ],
      "dvChoices": [
        "The number of times the gill covers opened and closed per minute",
        "The temperature of the aquarium water",
        "The size of the aquarium tank",
        "How long the fish were allowed to adjust"
      ],
      "explanation": "Water temperature was the factor changed on purpose, so it's the independent variable. Gill movement count is what was measured, so it's the dependent variable. Tank size, number of fish, lighting, and adjustment time were the same for both tanks.",
      "ivHighlights": [
        "water at room temperature",
        "water warmed slightly with a heater"
      ],
      "dvHighlights": [
        "how many times each fish's gill covers open and close in one minute"
      ]
    },
    {
      "text": "One tray has a smooth plastic bottom, and an identical tray has a rough sandpaper bottom, each holding the same number of snails. The student measures how long each snail takes to crawl ten centimeters across its tray.",
      "iv": "The texture of the tray's surface (smooth or rough)",
      "dv": "The time it took each snail to travel 10 centimeters",
      "ivChoices": [
        "The texture of the tray's surface (smooth or rough)",
        "The time it took each snail to travel 10 centimeters",
        "The type of food placed at the end of the tray",
        "The number of snails placed in each tray"
      ],
      "dvChoices": [
        "The time it took each snail to travel 10 centimeters",
        "The texture of the tray's surface (smooth or rough)",
        "The type of food placed at the end of the tray",
        "The temperature of the room"
      ],
      "explanation": "The surface texture was deliberately changed between the two trays, so it's the independent variable. Travel time is what was measured, making it the dependent variable. The food, number of snails, lighting, and temperature stayed the same in both trays.",
      "ivHighlights": [
        "a smooth plastic bottom",
        "a rough sandpaper bottom"
      ],
      "dvHighlights": [
        "how long each snail takes to crawl ten centimeters across its tray"
      ]
    },
    {
      "text": "The student collects data on how many ants gather at a drop of liquid every two minutes. A drop of plain water sits on a card near an ant trail, and a drop of sugar water sits on an identical card nearby.",
      "iv": "Whether the drop was plain water or sugar water",
      "dv": "The number of ants that gathered at the drop",
      "ivChoices": [
        "Whether the drop was plain water or sugar water",
        "The number of ants that gathered at the drop",
        "The time of day the drops were placed",
        "The type of index card used"
      ],
      "dvChoices": [
        "The number of ants that gathered at the drop",
        "Whether the drop was plain water or sugar water",
        "The time of day the drops were placed",
        "The distance between the two drops"
      ],
      "explanation": "The type of liquid (plain water vs. sugar water) was the factor changed on purpose, making it the independent variable. The number of ants that showed up is what was measured, making it the dependent variable. Time of day, card type, and distance were kept as similar as possible.",
      "ivHighlights": [
        "drop of plain water",
        "drop of sugar water"
      ],
      "dvHighlights": [
        "how many ants gather at a drop of liquid every two minutes"
      ]
    },
    {
      "text": "One group of crickets gets lettuce, and an identical group gets potato slices. After twenty-four hours, the student measures how much food was eaten by weighing what remains.",
      "iv": "The type of food given to the crickets (lettuce or potato)",
      "dv": "The amount of food eaten (weight of food remaining)",
      "ivChoices": [
        "The type of food given to the crickets (lettuce or potato)",
        "The amount of food eaten (weight of food remaining)",
        "The number of crickets in each group",
        "The size of the container used"
      ],
      "dvChoices": [
        "The amount of food eaten (weight of food remaining)",
        "The type of food given to the crickets (lettuce or potato)",
        "The number of crickets in each group",
        "How long the crickets were observed"
      ],
      "explanation": "The type of food offered is the factor changed on purpose, making it the independent variable. How much food was eaten (by weight) is what was measured, making it the dependent variable. The number of crickets, container size, and observation time were the same for both groups.",
      "ivHighlights": [
        "lettuce",
        "potato slices"
      ],
      "dvHighlights": [
        "how much food was eaten by weighing what remains"
      ]
    },
    {
      "text": "The student measures the number of mosquito bites on each arm after two hours outside. One arm gets sprayed with mosquito repellent, and the other arm stays unsprayed.",
      "iv": "Whether the arm was sprayed with mosquito repellent",
      "dv": "The number of mosquito bites",
      "ivChoices": [
        "Whether the arm was sprayed with mosquito repellent",
        "The number of mosquito bites",
        "How long the person stayed outside",
        "Which arm was used for each condition"
      ],
      "dvChoices": [
        "The number of mosquito bites",
        "Whether the arm was sprayed with mosquito repellent",
        "How long the person stayed outside",
        "The brand of repellent used"
      ],
      "explanation": "Whether repellent was applied is the factor changed on purpose, making it the independent variable. The number of bites is what was measured, making it the dependent variable. The time spent outside was the same for both arms.",
      "ivHighlights": [
        "gets sprayed with mosquito repellent",
        "stays unsprayed"
      ],
      "dvHighlights": [
        "the number of mosquito bites on each arm after two hours outside"
      ]
    }
  ],
  "Makeup & Skincare": [
    {
      "text": "The student measures the change in mass of each apple slice every twenty minutes. One apple slice gets a thin layer of lip balm, and an identical slice stays untreated, and both sit out for two hours.",
      "iv": "Whether lip balm was applied to the apple slice",
      "dv": "The change in mass of the apple slice over time",
      "ivChoices": [
        "Whether lip balm was applied to the apple slice",
        "The change in mass of the apple slice over time",
        "The size of the apple slices used",
        "The type of plate the slices were placed on"
      ],
      "dvChoices": [
        "The change in mass of the apple slice over time",
        "Whether lip balm was applied to the apple slice",
        "The size of the apple slices used",
        "How long the slices sat out"
      ],
      "explanation": "Applying lip balm (or not) was the factor changed on purpose, so it's the independent variable. The mass lost from each slice is what was measured, so it's the dependent variable. Slice size, plate type, and location were the same for both.",
      "ivHighlights": [
        "gets a thin layer of lip balm",
        "stays untreated"
      ],
      "dvHighlights": [
        "the change in mass of each apple slice every twenty minutes"
      ]
    },
    {
      "text": "One dish of UV color-changing beads gets covered with sunscreen, and an identical dish stays uncovered. Both sit in direct sunlight while the student measures the beads' color change every two minutes.",
      "iv": "Whether sunscreen was applied over the UV beads",
      "dv": "The color rating of the beads over time",
      "ivChoices": [
        "Whether sunscreen was applied over the UV beads",
        "The color rating of the beads over time",
        "The type of dish the beads were placed in",
        "The time of day the beads were tested"
      ],
      "dvChoices": [
        "The color rating of the beads over time",
        "Whether sunscreen was applied over the UV beads",
        "The type of dish the beads were placed in",
        "The number of beads used in each dish"
      ],
      "explanation": "Whether sunscreen covered the beads was the factor changed on purpose, making it the independent variable. The color rating (how much the beads changed color) is what was measured, making it the dependent variable. Dish type, location, and timing were kept the same.",
      "ivHighlights": [
        "gets covered with sunscreen",
        "stays uncovered"
      ],
      "dvHighlights": [
        "the beads' color change every two minutes"
      ]
    },
    {
      "text": "The student measures how many paper clips each hair strand can support before bending. One strand of hair gets sprayed with hairspray, and an identical strand stays untreated, and both are given time to dry first.",
      "iv": "Whether the hair strand was sprayed with hairspray",
      "dv": "The number of paper clips the strand could support",
      "ivChoices": [
        "Whether the hair strand was sprayed with hairspray",
        "The number of paper clips the strand could support",
        "The length of the hair strands",
        "How long the strands were left to dry"
      ],
      "dvChoices": [
        "The number of paper clips the strand could support",
        "Whether the hair strand was sprayed with hairspray",
        "The length of the hair strands",
        "The brand of hairspray used"
      ],
      "explanation": "Whether the strand was sprayed was the factor changed on purpose, making it the independent variable. The number of paper clips it could hold is what was measured, making it the dependent variable. Strand length and drying time were the same for both.",
      "ivHighlights": [
        "gets sprayed with hairspray",
        "stays untreated"
      ],
      "dvHighlights": [
        "how many paper clips each hair strand can support before bending"
      ]
    },
    {
      "text": "One nail polish swatch sits near a small fan on low speed, and an identical swatch sits away from any moving air. The student measures how long the nail polish takes to stop smudging on each swatch.",
      "iv": "Whether the swatch was placed near moving air (a fan)",
      "dv": "How long the nail polish took to stop smudging",
      "ivChoices": [
        "Whether the swatch was placed near moving air (a fan)",
        "How long the nail polish took to stop smudging",
        "The brand of nail polish used",
        "The number of coats of polish applied"
      ],
      "dvChoices": [
        "How long the nail polish took to stop smudging",
        "Whether the swatch was placed near moving air (a fan)",
        "The brand of nail polish used",
        "The type of swatch card used"
      ],
      "explanation": "Whether air was moving across the swatch was the factor changed on purpose, making it the independent variable. Drying time is what was measured, making it the dependent variable. The polish brand, number of coats, and swatch card were identical.",
      "ivHighlights": [
        "sits near a small fan on low speed",
        "sits away from any moving air"
      ],
      "dvHighlights": [
        "how long the nail polish takes to stop smudging on each swatch"
      ]
    },
    {
      "text": "The student measures how far each line smears after water is added. One line is drawn with regular eyeliner, and an identical line is drawn with waterproof eyeliner, and both are allowed to dry first.",
      "iv": "The type of eyeliner used (regular or waterproof)",
      "dv": "How far the line smeared after water was added",
      "ivChoices": [
        "The type of eyeliner used (regular or waterproof)",
        "How far the line smeared after water was added",
        "The pressure used to draw each line",
        "The length of each line drawn"
      ],
      "dvChoices": [
        "How far the line smeared after water was added",
        "The type of eyeliner used (regular or waterproof)",
        "The pressure used to draw each line",
        "The number of water drops used"
      ],
      "explanation": "The type of eyeliner was the factor changed on purpose, making it the independent variable. The width of the smear is what was measured, making it the dependent variable. Line pressure, length, drying time, and number of water drops were kept the same.",
      "ivHighlights": [
        "drawn with regular eyeliner",
        "drawn with waterproof eyeliner"
      ],
      "dvHighlights": [
        "how far each line smears after water is added"
      ]
    }
  ],
  "Sleep": [
    {
      "text": "The class measures how far a dropped ruler falls before being caught, in three trials per volunteer. Some student volunteers slept less than six hours last night, and others slept eight or more hours.",
      "iv": "The amount of sleep the volunteer got the night before",
      "dv": "The distance the ruler fell before being caught",
      "ivChoices": [
        "The amount of sleep the volunteer got the night before",
        "The distance the ruler fell before being caught",
        "The lighting in the testing room",
        "The number of trials each volunteer completed"
      ],
      "dvChoices": [
        "The distance the ruler fell before being caught",
        "The amount of sleep the volunteer got the night before",
        "The lighting in the testing room",
        "Which hand the volunteer used to catch the ruler"
      ],
      "explanation": "Hours of sleep is the factor being compared between the two groups, making it the independent variable. Reaction distance (how far the ruler fell) is what was measured, making it the dependent variable. Lighting, number of trials, and room conditions were the same for everyone.",
      "ivHighlights": [
        "slept less than six hours last night",
        "slept eight or more hours"
      ],
      "dvHighlights": [
        "how far a dropped ruler falls before being caught"
      ]
    },
    {
      "text": "Some student volunteers slept less than six hours last night, and others slept eight or more. Each volunteer studies the same list of fifteen words for thirty seconds, and the class measures how many words each person correctly recalls.",
      "iv": "The amount of sleep the volunteer got the night before",
      "dv": "The number of words correctly recalled",
      "ivChoices": [
        "The amount of sleep the volunteer got the night before",
        "The number of words correctly recalled",
        "How long the word list was shown on the screen",
        "The number of words on the list"
      ],
      "dvChoices": [
        "The number of words correctly recalled",
        "The amount of sleep the volunteer got the night before",
        "How long the word list was shown on the screen",
        "The lighting in the room"
      ],
      "explanation": "Hours of sleep is what separated the two groups, making it the independent variable. The number of words remembered is what was measured, making it the dependent variable. The list itself, display time, lighting, and noise level were the same for everyone.",
      "ivHighlights": [
        "slept less than six hours last night",
        "slept eight or more"
      ],
      "dvHighlights": [
        "how many words each person correctly recalls"
      ]
    },
    {
      "text": "The class measures how many problems each volunteer solves correctly in three minutes on the same thirty-problem math worksheet. Some student volunteers slept less than six hours last night, and others slept seven or more.",
      "iv": "The amount of sleep the volunteer got the night before",
      "dv": "The number of correctly solved math problems",
      "ivChoices": [
        "The amount of sleep the volunteer got the night before",
        "The number of correctly solved math problems",
        "The number of problems on the worksheet",
        "The amount of time given to finish"
      ],
      "dvChoices": [
        "The number of correctly solved math problems",
        "The amount of sleep the volunteer got the night before",
        "The number of problems on the worksheet",
        "The type of math problems used"
      ],
      "explanation": "Hours of sleep is the factor being compared, making it the independent variable. The number of correct answers is what was measured, making it the dependent variable. The worksheet, time limit, and working conditions were identical for both groups.",
      "ivHighlights": [
        "slept less than six hours last night",
        "slept seven or more"
      ],
      "dvHighlights": [
        "how many problems each volunteer solves correctly"
      ]
    },
    {
      "text": "Some student volunteers slept less than six hours last night, and others slept eight or more. Each volunteer stands on one foot with eyes closed, and a partner measures how many seconds they balance before losing it.",
      "iv": "The amount of sleep the volunteer got the night before",
      "dv": "The number of seconds the volunteer balanced before losing it",
      "ivChoices": [
        "The amount of sleep the volunteer got the night before",
        "The number of seconds the volunteer balanced before losing it",
        "The type of flooring used for the test",
        "The number of attempts each volunteer got"
      ],
      "dvChoices": [
        "The number of seconds the volunteer balanced before losing it",
        "The amount of sleep the volunteer got the night before",
        "The type of flooring used for the test",
        "Which foot the volunteer stood on"
      ],
      "explanation": "Hours of sleep is what separated the two groups, making it the independent variable. Balance time is what was measured, making it the dependent variable. The flooring, number of attempts, and conditions were the same for everyone.",
      "ivHighlights": [
        "slept less than six hours last night",
        "slept eight or more"
      ],
      "dvHighlights": [
        "how many seconds they balance before losing it"
      ]
    },
    {
      "text": "The class measures how many of the twenty hidden errors each volunteer correctly identifies in four minutes. Some student volunteers slept less than six hours last night, and others slept eight or more.",
      "iv": "The amount of sleep the volunteer got the night before",
      "dv": "The number of errors correctly identified",
      "ivChoices": [
        "The amount of sleep the volunteer got the night before",
        "The number of errors correctly identified",
        "The number of errors placed in the paragraph",
        "The amount of time given to find errors"
      ],
      "dvChoices": [
        "The number of errors correctly identified",
        "The amount of sleep the volunteer got the night before",
        "The number of errors placed in the paragraph",
        "The topic of the paragraph"
      ],
      "explanation": "Hours of sleep is the factor being compared, making it the independent variable. The number of errors found is what was measured, making it the dependent variable. The paragraph, time limit, and setting were identical for both groups.",
      "ivHighlights": [
        "slept less than six hours last night",
        "slept eight or more"
      ],
      "dvHighlights": [
        "how many of the twenty hidden errors each volunteer correctly identifies in four minutes"
      ]
    }
  ],
  "Farm & Agriculture": [
    {
      "text": "Every three days, the student measures the height of each bean seedling. Five cups of seeds get watered with a mix of fertilizer and water, and five identical cups get plain water on the same schedule.",
      "iv": "Whether the water contained fertilizer",
      "dv": "The height of the bean seedlings",
      "ivChoices": [
        "Whether the water contained fertilizer",
        "The height of the bean seedlings",
        "The type of cup used for planting",
        "The amount of sunlight the cups received"
      ],
      "dvChoices": [
        "The height of the bean seedlings",
        "Whether the water contained fertilizer",
        "The type of cup used for planting",
        "The number of seeds planted"
      ],
      "explanation": "Whether fertilizer was added is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Cup type, soil amount, sunlight, and watering schedule were the same for all ten cups.",
      "ivHighlights": [
        "a mix of fertilizer and water",
        "plain water on the same schedule"
      ],
      "dvHighlights": [
        "the height of each bean seedling"
      ]
    },
    {
      "text": "Six pots of radish seeds get two tablespoons of water daily, and six identical pots get one tablespoon daily. After two weeks, the student measures the length of each plant's root.",
      "iv": "The amount of water given each day",
      "dv": "The length of the radish root",
      "ivChoices": [
        "The amount of water given each day",
        "The length of the radish root",
        "The type of soil used",
        "The type of grow light used"
      ],
      "dvChoices": [
        "The length of the radish root",
        "The amount of water given each day",
        "The type of soil used",
        "The number of pots used"
      ],
      "explanation": "The daily amount of water is the factor that was changed on purpose, making it the independent variable. Root length is what was measured, making it the dependent variable. Soil type, pot type, and light source were identical for all twelve pots.",
      "ivHighlights": [
        "two tablespoons of water daily",
        "one tablespoon daily"
      ],
      "dvHighlights": [
        "the length of each plant's root"
      ]
    },
    {
      "text": "Each day, the student collects data on how many seeds have sprouted in each tray. Twenty corn seeds are planted in a tray of sand, and twenty more are planted in an identical tray of potting soil.",
      "iv": "The type of soil used (sand or potting soil)",
      "dv": "The number of seeds that sprouted",
      "ivChoices": [
        "The type of soil used (sand or potting soil)",
        "The number of seeds that sprouted",
        "The number of seeds planted in each tray",
        "The amount of water given"
      ],
      "dvChoices": [
        "The number of seeds that sprouted",
        "The type of soil used (sand or potting soil)",
        "The number of seeds planted in each tray",
        "The depth the seeds were planted"
      ],
      "explanation": "Soil type is the factor changed on purpose, making it the independent variable. The number of seeds that sprouted is what was measured, making it the dependent variable. The number of seeds planted, watering, sunlight, and planting depth were the same for both trays.",
      "ivHighlights": [
        "tray of sand",
        "tray of potting soil"
      ],
      "dvHighlights": [
        "how many seeds have sprouted in each tray"
      ]
    },
    {
      "text": "Six lettuce seedlings sit under a lamp providing eight hours of light daily, and six identical seedlings sit under a lamp providing fourteen hours of light. Every four days, the student measures the height of each seedling.",
      "iv": "The number of hours of light provided per day",
      "dv": "The height of the lettuce seedlings",
      "ivChoices": [
        "The number of hours of light provided per day",
        "The height of the lettuce seedlings",
        "The type of soil used",
        "The room temperature"
      ],
      "dvChoices": [
        "The height of the lettuce seedlings",
        "The number of hours of light provided per day",
        "The type of soil used",
        "The amount of water given"
      ],
      "explanation": "Hours of light per day is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Soil type, cups, temperature, and watering were the same for both groups.",
      "ivHighlights": [
        "eight hours of light daily",
        "fourteen hours of light"
      ],
      "dvHighlights": [
        "the height of each seedling"
      ]
    },
    {
      "text": "Once a week, the student measures the height of each tomato seedling. Six seedlings get watered with compost tea twice a week, and six identical seedlings get plain water on the same schedule.",
      "iv": "Whether the seedlings were watered with compost tea or plain water",
      "dv": "The height of the tomato seedlings",
      "ivChoices": [
        "Whether the seedlings were watered with compost tea or plain water",
        "The height of the tomato seedlings",
        "The type of pot used",
        "The amount of sunlight received"
      ],
      "dvChoices": [
        "The height of the tomato seedlings",
        "Whether the seedlings were watered with compost tea or plain water",
        "The type of pot used",
        "How often the seedlings were watered"
      ],
      "explanation": "The watering solution (compost tea vs. plain water) is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Pot type, soil, sunlight, and watering frequency were the same for all twelve seedlings.",
      "ivHighlights": [
        "compost tea twice a week",
        "plain water on the same schedule"
      ],
      "dvHighlights": [
        "the height of each tomato seedling"
      ]
    },
    {
      "text": "One cow receives a growth hormone mixed into its feed, and an identical cow receives no hormone. After two years, researchers measure the weight of each cow.",
      "iv": "Whether the cow received growth hormone",
      "dv": "The weight of the cow after two years",
      "ivChoices": [
        "Whether the cow received growth hormone",
        "The weight of the cow after two years",
        "The type of feed given to the cows",
        "The age of the cows at the start"
      ],
      "dvChoices": [
        "The weight of the cow after two years",
        "Whether the cow received growth hormone",
        "The type of feed given to the cows",
        "How long the cows were observed"
      ],
      "explanation": "Whether the cow got the growth hormone is the factor changed on purpose, making it the independent variable. The cow's weight after two years is what was measured, making it the dependent variable. The type of feed, starting age, and observation period were the same for both cows.",
      "ivHighlights": [
        "receives a growth hormone mixed into its feed",
        "receives no hormone"
      ],
      "dvHighlights": [
        "the weight of each cow"
      ]
    }
  ],
  "Social Media & Technology": [
    {
      "text": "The class measures each volunteer's heart rate before and after a ten-minute activity. Some student volunteers scroll through social media for that time, and others sit quietly with no phone.",
      "iv": "Whether the volunteer scrolled social media or sat quietly",
      "dv": "The change in heart rate",
      "ivChoices": [
        "Whether the volunteer scrolled social media or sat quietly",
        "The change in heart rate",
        "The room the volunteers sat in",
        "The device used (tablet)"
      ],
      "dvChoices": [
        "The change in heart rate",
        "Whether the volunteer scrolled social media or sat quietly",
        "The room the volunteers sat in",
        "The length of the activity (ten minutes)"
      ],
      "explanation": "The activity (scrolling vs. sitting quietly) is the factor changed on purpose, making it the independent variable. The change in heart rate is what was measured, making it the dependent variable. The room, device, and time length were the same for both groups.",
      "ivHighlights": [
        "scroll through social media for that time",
        "sit quietly with no phone"
      ],
      "dvHighlights": [
        "each volunteer's heart rate before and after a ten-minute activity"
      ]
    },
    {
      "text": "Some student volunteers spend fifteen minutes scrolling social media, and others sit quietly with no phone for the same time. Afterward, the class measures how many errors each volunteer correctly finds in the same paragraph in four minutes.",
      "iv": "Whether the volunteer scrolled social media or sat quietly beforehand",
      "dv": "The number of errors correctly identified",
      "ivChoices": [
        "Whether the volunteer scrolled social media or sat quietly beforehand",
        "The number of errors correctly identified",
        "The number of errors placed in the paragraph",
        "The amount of time given to find errors"
      ],
      "dvChoices": [
        "The number of errors correctly identified",
        "Whether the volunteer scrolled social media or sat quietly beforehand",
        "The number of errors placed in the paragraph",
        "The length of the activity beforehand"
      ],
      "explanation": "The activity beforehand (social media vs. sitting quietly) is the factor changed on purpose, making it the independent variable. The number of errors found is what was measured, making it the dependent variable. The paragraph and time limit were identical for both groups.",
      "ivHighlights": [
        "spend fifteen minutes scrolling social media",
        "sit quietly with no phone for the same time"
      ],
      "dvHighlights": [
        "how many errors each volunteer correctly finds"
      ]
    },
    {
      "text": "Afterward, the class measures how many words each volunteer correctly recalls from a studied list. Some student volunteers spend ten minutes browsing social media beforehand, and others spend ten minutes solving a word puzzle on paper.",
      "iv": "Whether the volunteer used social media or solved a word puzzle beforehand",
      "dv": "The number of words correctly recalled",
      "ivChoices": [
        "Whether the volunteer used social media or solved a word puzzle beforehand",
        "The number of words correctly recalled",
        "How long the word list was displayed",
        "The room the volunteers were tested in"
      ],
      "dvChoices": [
        "The number of words correctly recalled",
        "Whether the volunteer used social media or solved a word puzzle beforehand",
        "How long the word list was displayed",
        "The number of words on the list"
      ],
      "explanation": "The activity beforehand is the factor changed on purpose, making it the independent variable. The number of words remembered is what was measured, making it the dependent variable. The word list, display time, and room were the same for both groups.",
      "ivHighlights": [
        "spend ten minutes browsing social media beforehand",
        "spend ten minutes solving a word puzzle on paper"
      ],
      "dvHighlights": [
        "how many words each volunteer correctly recalls from a studied list"
      ]
    },
    {
      "text": "Some student volunteers spend twelve minutes scrolling social media, and others spend twelve minutes reading a printed magazine. Before and after, the class measures each volunteer's self-rated mood on a scale from one to ten.",
      "iv": "Whether the volunteer used social media or read a magazine",
      "dv": "The change in the volunteer's self-rated mood",
      "ivChoices": [
        "Whether the volunteer used social media or read a magazine",
        "The change in the volunteer's self-rated mood",
        "The length of the activity (twelve minutes)",
        "The room the volunteers sat in"
      ],
      "dvChoices": [
        "The change in the volunteer's self-rated mood",
        "Whether the volunteer used social media or read a magazine",
        "The length of the activity (twelve minutes)",
        "The rating scale used (one to ten)"
      ],
      "explanation": "The activity (social media vs. reading) is the factor changed on purpose, making it the independent variable. The change in mood rating is what was measured, making it the dependent variable. The activity length, room, and rating scale were the same for both groups.",
      "ivHighlights": [
        "scrolling social media",
        "reading a printed magazine"
      ],
      "dvHighlights": [
        "each volunteer's self-rated mood on a scale from one to ten"
      ]
    },
    {
      "text": "The class measures how long it takes each volunteer to complete a word-search puzzle. Some volunteers work with a silent tablet nearby, and others work with a tablet that buzzes every thirty seconds.",
      "iv": "Whether the tablet sent frequent notifications",
      "dv": "The time it took to complete the word-search puzzle",
      "ivChoices": [
        "Whether the tablet sent frequent notifications",
        "The time it took to complete the word-search puzzle",
        "The puzzle each volunteer worked on",
        "The desk the volunteer sat at"
      ],
      "dvChoices": [
        "The time it took to complete the word-search puzzle",
        "Whether the tablet sent frequent notifications",
        "The puzzle each volunteer worked on",
        "The volume of the notification sound"
      ],
      "explanation": "Whether notifications interrupted the volunteer is the factor changed on purpose, making it the independent variable. Completion time is what was measured, making it the dependent variable. The puzzle itself and the desk setup were the same for both groups.",
      "ivHighlights": [
        "a silent tablet nearby",
        "a tablet that buzzes every thirty seconds"
      ],
      "dvHighlights": [
        "how long it takes each volunteer to complete a word-search puzzle"
      ]
    }
  ],
  "Food & Nutrition": [
    {
      "text": "Every fifteen minutes for an hour, the student measures how brown each apple slice has turned. Half of a sliced apple gets dipped in lemon juice, and the other half gets dipped in plain water.",
      "iv": "Whether the apple slice was dipped in lemon juice or plain water",
      "dv": "The browning rating (color) of the apple slice",
      "ivChoices": [
        "Whether the apple slice was dipped in lemon juice or plain water",
        "The browning rating (color) of the apple slice",
        "The size and thickness of the apple slices",
        "The type of plate used"
      ],
      "dvChoices": [
        "The browning rating (color) of the apple slice",
        "Whether the apple slice was dipped in lemon juice or plain water",
        "The size and thickness of the apple slices",
        "How long the slices were dipped"
      ],
      "explanation": "The liquid used (lemon juice vs. plain water) is the factor changed on purpose, making it the independent variable. The browning rating is what was measured, making it the dependent variable. Slice size, plate type, and location were the same for both sets.",
      "ivHighlights": [
        "dipped in lemon juice",
        "dipped in plain water"
      ],
      "dvHighlights": [
        "how brown each apple slice has turned"
      ]
    },
    {
      "text": "One bottle of warm water and yeast gets sugar added, and an identical bottle gets no sugar. A balloon covers each bottle's mouth, and the student measures the size of each balloon every five minutes.",
      "iv": "Whether sugar was added to the yeast mixture",
      "dv": "The size (circumference) of the inflating balloon",
      "ivChoices": [
        "Whether sugar was added to the yeast mixture",
        "The size (circumference) of the inflating balloon",
        "The amount of yeast used",
        "The temperature of the room"
      ],
      "dvChoices": [
        "The size (circumference) of the inflating balloon",
        "Whether sugar was added to the yeast mixture",
        "The amount of yeast used",
        "The type of bottle used"
      ],
      "explanation": "Whether sugar was added is the factor changed on purpose, making it the independent variable. Balloon size is what was measured, making it the dependent variable. The amount of yeast, water temperature, and bottle type were the same for both.",
      "ivHighlights": [
        "gets sugar added",
        "gets no sugar"
      ],
      "dvHighlights": [
        "the size of each balloon every five minutes"
      ]
    },
    {
      "text": "Every five minutes, the student measures the size of the balloon covering each bottle's mouth. One bottle of sugar and yeast gets warm water, and an identical bottle gets cold water.",
      "iv": "The temperature of the water used (warm or cold)",
      "dv": "The size (circumference) of the inflating balloon",
      "ivChoices": [
        "The temperature of the water used (warm or cold)",
        "The size (circumference) of the inflating balloon",
        "The amount of sugar used",
        "The type of bottle used"
      ],
      "dvChoices": [
        "The size (circumference) of the inflating balloon",
        "The temperature of the water used (warm or cold)",
        "The amount of sugar used",
        "The type of balloon used"
      ],
      "explanation": "Water temperature is the factor changed on purpose, making it the independent variable. Balloon size is what was measured, making it the dependent variable. The amount of sugar and yeast, and the bottle and balloon type, were the same for both.",
      "ivHighlights": [
        "gets warm water",
        "gets cold water"
      ],
      "dvHighlights": [
        "the size of the balloon covering each bottle's mouth"
      ]
    },
    {
      "text": "One eggshell fragment sits in full-strength vinegar, and an identical fragment sits in diluted vinegar. Every twenty minutes, the student measures how soft each fragment has become by pressing on it.",
      "iv": "The concentration of vinegar (full-strength or diluted)",
      "dv": "The softness rating of the eggshell",
      "ivChoices": [
        "The concentration of vinegar (full-strength or diluted)",
        "The softness rating of the eggshell",
        "The size of the eggshell fragment",
        "The room temperature"
      ],
      "dvChoices": [
        "The softness rating of the eggshell",
        "The concentration of vinegar (full-strength or diluted)",
        "The size of the eggshell fragment",
        "How the fragment was dried before rating"
      ],
      "explanation": "Vinegar concentration is the factor changed on purpose, making it the independent variable. The softness rating is what was measured, making it the dependent variable. Fragment size, room temperature, and covering were the same for both cups.",
      "ivHighlights": [
        "sits in full-strength vinegar",
        "sits in diluted vinegar"
      ],
      "dvHighlights": [
        "how soft each fragment has become by pressing on it"
      ]
    },
    {
      "text": "Each day for two weeks, the student collects data on the percentage of each bread slice's surface covered in mold. One slice gets sealed in a bag with added moisture, and an identical slice gets sealed in a dry bag.",
      "iv": "Whether moisture was added to the storage bag",
      "dv": "The percentage of the bread's surface covered in mold",
      "ivChoices": [
        "Whether moisture was added to the storage bag",
        "The percentage of the bread's surface covered in mold",
        "The loaf of bread the slices came from",
        "The temperature of the storage cabinet"
      ],
      "dvChoices": [
        "The percentage of the bread's surface covered in mold",
        "Whether moisture was added to the storage bag",
        "The loaf of bread the slices came from",
        "How long the bread was observed"
      ],
      "explanation": "Whether moisture was added is the factor changed on purpose, making it the independent variable. Mold coverage is what was measured, making it the dependent variable. The loaf, storage cabinet, and temperature were the same for both bags.",
      "ivHighlights": [
        "sealed in a bag with added moisture",
        "sealed in a dry bag"
      ],
      "dvHighlights": [
        "the percentage of each bread slice's surface covered in mold"
      ]
    },
    {
      "text": "One grape sits in a cup of tap water, and an identical grape sits in a cup of salt water. After one day, the student measures the change in weight of each grape.",
      "iv": "Whether the grape was placed in tap water or salt water",
      "dv": "The change in weight of the grape",
      "ivChoices": [
        "Whether the grape was placed in tap water or salt water",
        "The change in weight of the grape",
        "The size of the cup used",
        "How long the grapes soaked"
      ],
      "dvChoices": [
        "The change in weight of the grape",
        "Whether the grape was placed in tap water or salt water",
        "The size of the cup used",
        "The type of grape used"
      ],
      "explanation": "The type of water (tap vs. salt) is the factor changed on purpose, making it the independent variable. The change in the grape's weight is what was measured, making it the dependent variable. The cup size, soaking time, and type of grape were the same for both.",
      "ivHighlights": [
        "a cup of tap water",
        "a cup of salt water"
      ],
      "dvHighlights": [
        "the change in weight of each grape"
      ]
    }
  ],
  "Exercise & Fitness": [
    {
      "text": "The class measures each volunteer's heart rate before and after one minute. Some volunteers do jumping jacks during that minute, and others sit quietly.",
      "iv": "Whether the volunteer did jumping jacks or sat quietly",
      "dv": "The change in heart rate",
      "ivChoices": [
        "Whether the volunteer did jumping jacks or sat quietly",
        "The change in heart rate",
        "The room temperature",
        "The method used to count the pulse"
      ],
      "dvChoices": [
        "The change in heart rate",
        "Whether the volunteer did jumping jacks or sat quietly",
        "The room temperature",
        "The length of the activity (one minute)"
      ],
      "explanation": "The activity (jumping jacks vs. sitting) is the factor changed on purpose, making it the independent variable. The change in heart rate is what was measured, making it the dependent variable. Room temperature, timing method, and activity length were the same for both groups.",
      "ivHighlights": [
        "do jumping jacks during that minute",
        "sit quietly"
      ],
      "dvHighlights": [
        "each volunteer's heart rate before and after one minute"
      ]
    },
    {
      "text": "Some student volunteers march in place while listening to slow, calm music, and others march while listening to fast, upbeat music. The class measures how many minutes each volunteer marches before stopping.",
      "iv": "The tempo of the music (slow or fast)",
      "dv": "How many minutes the volunteer marched before stopping",
      "ivChoices": [
        "The tempo of the music (slow or fast)",
        "How many minutes the volunteer marched before stopping",
        "The room the volunteers marched in",
        "The type of headphones used"
      ],
      "dvChoices": [
        "How many minutes the volunteer marched before stopping",
        "The tempo of the music (slow or fast)",
        "The room the volunteers marched in",
        "The volume of the music"
      ],
      "explanation": "Music tempo is the factor changed on purpose, making it the independent variable. Marching time is what was measured, making it the dependent variable. The room, headphones, and instructions to stop when tired were the same for both groups.",
      "ivHighlights": [
        "slow, calm music",
        "fast, upbeat music"
      ],
      "dvHighlights": [
        "how many minutes each volunteer marches before stopping"
      ]
    },
    {
      "text": "The class measures how far each volunteer reaches on a sit-and-reach test. Some volunteers stretch for five minutes beforehand, and others sit quietly for five minutes instead.",
      "iv": "Whether the volunteer stretched before the test",
      "dv": "The distance reached on the sit-and-reach test",
      "ivChoices": [
        "Whether the volunteer stretched before the test",
        "The distance reached on the sit-and-reach test",
        "The ruler used for measuring",
        "The amount of time before the test"
      ],
      "dvChoices": [
        "The distance reached on the sit-and-reach test",
        "Whether the volunteer stretched before the test",
        "The ruler used for measuring",
        "The position of the volunteer's legs"
      ],
      "explanation": "Whether stretching happened beforehand is the factor changed on purpose, making it the independent variable. Reach distance is what was measured, making it the dependent variable. The ruler, leg position, and five-minute period were the same for both groups.",
      "ivHighlights": [
        "stretch for five minutes beforehand",
        "sit quietly for five minutes instead"
      ],
      "dvHighlights": [
        "how far each volunteer reaches on a sit-and-reach test"
      ]
    },
    {
      "text": "Some student volunteers drink a cup of water fifteen minutes before doing jumping jacks, and others drink no water. The class measures how many minutes each volunteer lasts before needing to stop.",
      "iv": "Whether the volunteer drank water before the activity",
      "dv": "How many minutes the volunteer lasted doing jumping jacks",
      "ivChoices": [
        "Whether the volunteer drank water before the activity",
        "How many minutes the volunteer lasted doing jumping jacks",
        "The room the volunteers rested in beforehand",
        "The amount of rest before the activity"
      ],
      "dvChoices": [
        "How many minutes the volunteer lasted doing jumping jacks",
        "Whether the volunteer drank water before the activity",
        "The room the volunteers rested in beforehand",
        "The type of exercise performed"
      ],
      "explanation": "Whether water was consumed beforehand is the factor changed on purpose, making it the independent variable. How long the volunteer lasted is what was measured, making it the dependent variable. The resting room, rest period, and exercise type were the same for both groups.",
      "ivHighlights": [
        "drink a cup of water fifteen minutes before doing jumping jacks",
        "drink no water"
      ],
      "dvHighlights": [
        "how many minutes each volunteer lasts before needing to stop"
      ]
    },
    {
      "text": "The class measures how many times each volunteer squeezes a clothespin in a second thirty-second round. Some volunteers rest for two minutes between rounds, while others repeat it immediately with no rest.",
      "iv": "Whether the volunteer got a rest period between rounds",
      "dv": "The number of squeezes completed in the second round",
      "ivChoices": [
        "Whether the volunteer got a rest period between rounds",
        "The number of squeezes completed in the second round",
        "The number of squeezes completed in the first round",
        "The object used (a clothespin)"
      ],
      "dvChoices": [
        "The number of squeezes completed in the second round",
        "Whether the volunteer got a rest period between rounds",
        "The number of squeezes completed in the first round",
        "The length of each round (thirty seconds)"
      ],
      "explanation": "Whether a rest period was given is the factor changed on purpose, making it the independent variable. The number of squeezes in the second round is what was measured, making it the dependent variable. The clothespin, round length, and first-round procedure were the same for everyone.",
      "ivHighlights": [
        "rest for two minutes between rounds",
        "repeat it immediately with no rest"
      ],
      "dvHighlights": [
        "how many times each volunteer squeezes a clothespin in a second thirty-second round"
      ]
    },
    {
      "text": "A volunteer's blood pressure is measured while resting quietly. The same volunteer then completes a stressful timed task, and the class measures their blood pressure again.",
      "iv": "Whether the volunteer was resting or doing a stressful task",
      "dv": "The volunteer's blood pressure",
      "ivChoices": [
        "Whether the volunteer was resting or doing a stressful task",
        "The volunteer's blood pressure",
        "The type of task used to create stress",
        "The time of day the test happened"
      ],
      "dvChoices": [
        "The volunteer's blood pressure",
        "Whether the volunteer was resting or doing a stressful task",
        "The type of task used to create stress",
        "How the blood pressure was measured"
      ],
      "explanation": "Whether the volunteer was resting or under stress is the factor changed on purpose, making it the independent variable. Blood pressure is what was measured, making it the dependent variable. The same volunteer and the same measuring method were used both times, so only the resting-versus-stress condition changed.",
      "ivHighlights": [
        "resting quietly",
        "a stressful timed task"
      ],
      "dvHighlights": [
        "blood pressure"
      ]
    }
  ],
  "Plants & Gardening": [
    {
      "text": "Every three days, the student measures the height of each seedling. One bean seedling sits under a lamp with a red filter, and an identical seedling sits under a lamp with no filter.",
      "iv": "The color of light the seedling received (red filter or white light)",
      "dv": "The height of the seedling",
      "ivChoices": [
        "The color of light the seedling received (red filter or white light)",
        "The height of the seedling",
        "The type of pot and soil used",
        "The amount of water given"
      ],
      "dvChoices": [
        "The height of the seedling",
        "The color of light the seedling received (red filter or white light)",
        "The type of pot and soil used",
        "The number of hours of light per day"
      ],
      "explanation": "The color of light is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Pot, soil, watering, and hours of light per day were the same for both seedlings.",
      "ivHighlights": [
        "a lamp with a red filter",
        "a lamp with no filter"
      ],
      "dvHighlights": [
        "the height of each seedling"
      ]
    },
    {
      "text": "One bean seedling sits near a speaker playing music for two hours daily, and an identical seedling sits in a silent room. Every four days, the student measures the height of each plant.",
      "iv": "Whether the plant was exposed to music",
      "dv": "The height of the plant",
      "ivChoices": [
        "Whether the plant was exposed to music",
        "The height of the plant",
        "The distance from the window",
        "The type of pot and soil used"
      ],
      "dvChoices": [
        "The height of the plant",
        "Whether the plant was exposed to music",
        "The distance from the window",
        "How often the plant was watered"
      ],
      "explanation": "Whether music was played is the factor changed on purpose, making it the independent variable. Plant height is what was measured, making it the dependent variable. Distance from the window, pot, soil, and watering schedule were the same for both plants.",
      "ivHighlights": [
        "sits near a speaker playing music for two hours daily",
        "sits in a silent room"
      ],
      "dvHighlights": [
        "the height of each plant"
      ]
    },
    {
      "text": "Once a week, the student collects data on the number of healthy green leaves on each plant. One potted plant gets watered only with tap water, and an identical plant gets watered only with distilled water.",
      "iv": "The type of water used (tap or distilled)",
      "dv": "The number of healthy green leaves",
      "ivChoices": [
        "The type of water used (tap or distilled)",
        "The number of healthy green leaves",
        "The amount of water given",
        "The plant's location on the windowsill"
      ],
      "dvChoices": [
        "The number of healthy green leaves",
        "The type of water used (tap or distilled)",
        "The amount of water given",
        "The species of plant used"
      ],
      "explanation": "The type of water is the factor changed on purpose, making it the independent variable. The number of healthy leaves is what was measured, making it the dependent variable. Amount of water, schedule, and plant species were the same for both.",
      "ivHighlights": [
        "watered only with tap water",
        "watered only with distilled water"
      ],
      "dvHighlights": [
        "the number of healthy green leaves on each plant"
      ]
    },
    {
      "text": "One tomato seedling gets watered with an Epsom salt mixture, and an identical seedling gets plain water. Once a week, the student measures the height of each plant.",
      "iv": "Whether Epsom salt was added to the water",
      "dv": "The height of the tomato seedling",
      "ivChoices": [
        "Whether Epsom salt was added to the water",
        "The height of the tomato seedling",
        "The type of soil and pot used",
        "The amount of sunlight received"
      ],
      "dvChoices": [
        "The height of the tomato seedling",
        "Whether Epsom salt was added to the water",
        "The type of soil and pot used",
        "The watering schedule"
      ],
      "explanation": "Whether Epsom salt was added is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Soil, pot, sunlight, and watering schedule were the same for both seedlings.",
      "ivHighlights": [
        "watered with an Epsom salt mixture",
        "gets plain water"
      ],
      "dvHighlights": [
        "the height of each plant"
      ]
    },
    {
      "text": "Every five days, the student measures the height of each marigold plant. One plant grows in soil mixed with coffee grounds, and an identical plant grows in unchanged soil.",
      "iv": "Whether coffee grounds were mixed into the soil",
      "dv": "The height of the marigold plant",
      "ivChoices": [
        "Whether coffee grounds were mixed into the soil",
        "The height of the marigold plant",
        "The type of pot used",
        "The amount of water given"
      ],
      "dvChoices": [
        "The height of the marigold plant",
        "Whether coffee grounds were mixed into the soil",
        "The type of pot used",
        "The plant's location on the patio"
      ],
      "explanation": "Whether coffee grounds were added is the factor changed on purpose, making it the independent variable. Plant height is what was measured, making it the dependent variable. Pot type, watering, and location were the same for both marigolds.",
      "ivHighlights": [
        "soil mixed with coffee grounds",
        "unchanged soil"
      ],
      "dvHighlights": [
        "the height of each marigold plant"
      ]
    },
    {
      "text": "One plant gets watered with water that was boiled in a microwave and then cooled, and an identical plant gets watered with plain tap water. After two weeks, the student measures the height of each plant.",
      "iv": "Whether the plant was watered with microwaved-and-cooled water or plain tap water",
      "dv": "The height of the plant",
      "ivChoices": [
        "Whether the plant was watered with microwaved-and-cooled water or plain tap water",
        "The height of the plant",
        "The type of pot used",
        "The amount of light each plant received"
      ],
      "dvChoices": [
        "The height of the plant",
        "Whether the plant was watered with microwaved-and-cooled water or plain tap water",
        "The type of pot used",
        "The amount of water given"
      ],
      "explanation": "Whether the water had been microwaved is the factor changed on purpose, making it the independent variable. Plant height is what was measured, making it the dependent variable. The pot, light, and amount of water given were the same for both plants.",
      "ivHighlights": [
        "water that was boiled in a microwave and then cooled",
        "plain tap water"
      ],
      "dvHighlights": [
        "the height of each plant"
      ]
    }
  ],
  "Household Germs & Cleaning": [
    {
      "text": "Each day for two weeks, the class collects data on the percentage of mold covering each bread slice. One volunteer uses hand sanitizer before touching a slice, and another volunteer touches an identical slice without sanitizing.",
      "iv": "Whether the volunteer used hand sanitizer before touching the bread",
      "dv": "The percentage of mold coverage on the bread",
      "ivChoices": [
        "Whether the volunteer used hand sanitizer before touching the bread",
        "The percentage of mold coverage on the bread",
        "The loaf the bread slices came from",
        "The surfaces touched beforehand"
      ],
      "dvChoices": [
        "The percentage of mold coverage on the bread",
        "Whether the volunteer used hand sanitizer before touching the bread",
        "The loaf the bread slices came from",
        "The temperature of the storage cabinet"
      ],
      "explanation": "Whether sanitizer was used is the factor changed on purpose, making it the independent variable. Mold coverage is what was measured, making it the dependent variable. The loaf, surfaces touched beforehand, and storage conditions were the same for both slices.",
      "ivHighlights": [
        "uses hand sanitizer before touching a slice",
        "touches an identical slice without sanitizing"
      ],
      "dvHighlights": [
        "the percentage of mold covering each bread slice"
      ]
    },
    {
      "text": "One agar plate gets sprayed with disinfectant after being swabbed with bacteria, and an identical plate stays untreated. After forty-eight hours, the student collects data on the number of bacterial colonies on each plate.",
      "iv": "Whether the agar plate was treated with disinfectant",
      "dv": "The number of visible bacterial colonies",
      "ivChoices": [
        "Whether the agar plate was treated with disinfectant",
        "The number of visible bacterial colonies",
        "The countertop that was swabbed",
        "The storage location of the plates"
      ],
      "dvChoices": [
        "The number of visible bacterial colonies",
        "Whether the agar plate was treated with disinfectant",
        "The countertop that was swabbed",
        "The length of time the plates were stored"
      ],
      "explanation": "Whether disinfectant was applied is the factor changed on purpose, making it the independent variable. The number of colonies is what was measured, making it the dependent variable. The countertop, swabbing method, and storage conditions were the same for both plates.",
      "ivHighlights": [
        "gets sprayed with disinfectant",
        "stays untreated"
      ],
      "dvHighlights": [
        "the number of bacterial colonies on each plate"
      ]
    },
    {
      "text": "The class collects data on the number of bacterial colonies that grow on each plate after forty-eight hours. One volunteer washes their hands with soap and water, and another rinses with water only, before both press their fingertips onto identical agar plates.",
      "iv": "Whether the volunteer washed with soap or rinsed with water only",
      "dv": "The number of visible bacterial colonies",
      "ivChoices": [
        "Whether the volunteer washed with soap or rinsed with water only",
        "The number of visible bacterial colonies",
        "The activities done before washing",
        "The amount of time spent washing"
      ],
      "dvChoices": [
        "The number of visible bacterial colonies",
        "Whether the volunteer washed with soap or rinsed with water only",
        "The activities done before washing",
        "The storage location of the plates"
      ],
      "explanation": "The washing method (soap vs. water only) is the factor changed on purpose, making it the independent variable. The number of colonies is what was measured, making it the dependent variable. The prior activities, washing time, and storage conditions were the same for both volunteers.",
      "ivHighlights": [
        "washes their hands with soap and water",
        "rinses with water only"
      ],
      "dvHighlights": [
        "the number of bacterial colonies that grow on each plate after forty-eight hours"
      ]
    },
    {
      "text": "One bread slice gets sprayed with a vinegar and water mix, and an identical slice stays unsprayed. Each day for two weeks, the student measures the percentage of mold covering each slice.",
      "iv": "Whether the bread was sprayed with a vinegar mixture",
      "dv": "The percentage of mold coverage on the bread",
      "ivChoices": [
        "Whether the bread was sprayed with a vinegar mixture",
        "The percentage of mold coverage on the bread",
        "The loaf the bread slices came from",
        "The temperature of the storage cabinet"
      ],
      "dvChoices": [
        "The percentage of mold coverage on the bread",
        "Whether the bread was sprayed with a vinegar mixture",
        "The loaf the bread slices came from",
        "How long the bread was observed"
      ],
      "explanation": "Whether vinegar spray was applied is the factor changed on purpose, making it the independent variable. Mold coverage is what was measured, making it the dependent variable. The loaf, storage cabinet, and observation period were the same for both bags.",
      "ivHighlights": [
        "gets sprayed with a vinegar and water mix",
        "stays unsprayed"
      ],
      "dvHighlights": [
        "the percentage of mold covering each slice"
      ]
    },
    {
      "text": "The class measures the number of bacterial colonies on each plate after forty-eight hours. One desk section gets wiped with disinfectant and dries for the full recommended time before swabbing, and an identical section gets swabbed after only ten seconds of drying.",
      "iv": "The amount of time the disinfectant was left to dry before swabbing",
      "dv": "The number of visible bacterial colonies",
      "ivChoices": [
        "The amount of time the disinfectant was left to dry before swabbing",
        "The number of visible bacterial colonies",
        "The desk that was wiped",
        "The brand of disinfectant wipe used"
      ],
      "dvChoices": [
        "The number of visible bacterial colonies",
        "The amount of time the disinfectant was left to dry before swabbing",
        "The desk that was wiped",
        "The storage location of the plates"
      ],
      "explanation": "The drying time before swabbing is the factor changed on purpose, making it the independent variable. The number of colonies is what was measured, making it the dependent variable. The desk, wipe brand, and storage conditions were the same for both sections.",
      "ivHighlights": [
        "dries for the full recommended time before swabbing",
        "gets swabbed after only ten seconds of drying"
      ],
      "dvHighlights": [
        "the number of bacterial colonies on each plate after forty-eight hours"
      ]
    },
    {
      "text": "Bacteria grow across a petri dish. A student sprays an antibiotic on half of the dish and leaves the other half untreated. After one week, the student measures the number of bacteria colonies on each side.",
      "iv": "Whether the antibiotic was sprayed on that half of the dish",
      "dv": "The number of bacteria colonies",
      "ivChoices": [
        "Whether the antibiotic was sprayed on that half of the dish",
        "The number of bacteria colonies",
        "The size of the petri dish",
        "How long the bacteria grew before the antibiotic was added"
      ],
      "dvChoices": [
        "The number of bacteria colonies",
        "Whether the antibiotic was sprayed on that half of the dish",
        "The size of the petri dish",
        "The type of bacteria used"
      ],
      "explanation": "Whether the antibiotic was applied is the factor changed on purpose, making it the independent variable. The number of bacteria colonies is what was measured, making it the dependent variable. The petri dish, bacteria type, and growing time before treatment were the same for both halves.",
      "ivHighlights": [
        "sprays an antibiotic on half of the dish",
        "leaves the other half untreated"
      ],
      "dvHighlights": [
        "the number of bacteria colonies on each side"
      ]
    }
  ],
  "Music & Sound": [
    {
      "text": "The class measures how long it takes each volunteer to complete a word-search puzzle. Some volunteers listen to slow, calm music while working, and others listen to fast, upbeat music.",
      "iv": "The tempo of the music (slow or fast)",
      "dv": "The time it took to complete the word-search puzzle",
      "ivChoices": [
        "The tempo of the music (slow or fast)",
        "The time it took to complete the word-search puzzle",
        "The desk the volunteer sat at",
        "The puzzle used"
      ],
      "dvChoices": [
        "The time it took to complete the word-search puzzle",
        "The tempo of the music (slow or fast)",
        "The desk the volunteer sat at",
        "The type of headphones used"
      ],
      "explanation": "Music tempo is the factor changed on purpose, making it the independent variable. Completion time is what was measured, making it the dependent variable. The desk, puzzle, room, and headphones were the same for both groups.",
      "ivHighlights": [
        "slow, calm music",
        "fast, upbeat music"
      ],
      "dvHighlights": [
        "how long it takes each volunteer to complete a word-search puzzle"
      ]
    },
    {
      "text": "Some student volunteers study a word list in silence, and others study the identical list while soft instrumental music plays. Afterward, the class measures how many words each volunteer correctly recalls.",
      "iv": "Whether music played in the background while studying",
      "dv": "The number of words correctly recalled",
      "ivChoices": [
        "Whether music played in the background while studying",
        "The number of words correctly recalled",
        "How long the word list was displayed",
        "The number of words on the list"
      ],
      "dvChoices": [
        "The number of words correctly recalled",
        "Whether music played in the background while studying",
        "How long the word list was displayed",
        "The room the volunteers studied in"
      ],
      "explanation": "Whether background music played is the factor changed on purpose, making it the independent variable. The number of words remembered is what was measured, making it the dependent variable. The word list, display time, and time to write answers were the same for both groups.",
      "ivHighlights": [
        "study a word list in silence",
        "soft instrumental music plays"
      ],
      "dvHighlights": [
        "how many words each volunteer correctly recalls"
      ]
    },
    {
      "text": "The class measures each volunteer's heart rate before and after listening to an audio clip. Some volunteers hear the clip at low volume, and others hear the identical clip at a louder volume.",
      "iv": "The volume of the audio clip (low or loud)",
      "dv": "The change in heart rate",
      "ivChoices": [
        "The volume of the audio clip (low or loud)",
        "The change in heart rate",
        "The length of the audio clip",
        "The method used to count the pulse"
      ],
      "dvChoices": [
        "The change in heart rate",
        "The volume of the audio clip (low or loud)",
        "The length of the audio clip",
        "The room the volunteers sat in"
      ],
      "explanation": "Volume is the factor changed on purpose, making it the independent variable. The change in heart rate is what was measured, making it the dependent variable. The audio clip length, pulse-counting method, and room were the same for both groups.",
      "ivHighlights": [
        "low volume",
        "a louder volume"
      ],
      "dvHighlights": [
        "each volunteer's heart rate before and after listening to an audio clip"
      ]
    },
    {
      "text": "Some student volunteers solve a math worksheet in a silent room, and others solve the identical worksheet in a room with background white noise. The class measures how many problems each volunteer solves correctly.",
      "iv": "Whether white noise played in the background",
      "dv": "The number of correctly solved math problems",
      "ivChoices": [
        "Whether white noise played in the background",
        "The number of correctly solved math problems",
        "The number of problems on the worksheet",
        "The amount of time given to finish"
      ],
      "dvChoices": [
        "The number of correctly solved math problems",
        "Whether white noise played in the background",
        "The number of problems on the worksheet",
        "The room temperature"
      ],
      "explanation": "Whether white noise played is the factor changed on purpose, making it the independent variable. The number of correct answers is what was measured, making it the dependent variable. The worksheet, time limit, temperature, and lighting were the same for both groups.",
      "ivHighlights": [
        "a silent room",
        "a room with background white noise"
      ],
      "dvHighlights": [
        "how many problems each volunteer solves correctly"
      ]
    },
    {
      "text": "The class measures how far a dropped ruler falls before being caught. Some volunteers catch the ruler while listening to fast-paced music, and others catch it while listening to slow, calm music.",
      "iv": "The type of music playing (fast-paced or calm)",
      "dv": "The distance the ruler fell before being caught",
      "ivChoices": [
        "The type of music playing (fast-paced or calm)",
        "The distance the ruler fell before being caught",
        "The number of trials completed",
        "The room the test took place in"
      ],
      "dvChoices": [
        "The distance the ruler fell before being caught",
        "The type of music playing (fast-paced or calm)",
        "The number of trials completed",
        "The headphones used"
      ],
      "explanation": "The type of music is the factor changed on purpose, making it the independent variable. Reaction distance is what was measured, making it the dependent variable. The number of trials and testing room were the same for both groups.",
      "ivHighlights": [
        "fast-paced music",
        "slow, calm music"
      ],
      "dvHighlights": [
        "how far a dropped ruler falls before being caught"
      ]
    }
  ]
};
