// scenarios.js
// A bank of pre-written experimental scenario paragraphs for the
// Biology Experimental Scenario Generator, PLUS the answer key data
// used by the "Random Test Practice" quiz feature.
//
// Each topic is a list of scenario objects with:
//   text         - the scenario paragraph (no labeled IV/DV/groups)
//   iv           - the correct independent variable, in plain words
//   dv           - the correct dependent variable, in plain words
//   ivChoices    - 4 possible answers for "What is the IV?" (correct + 3 distractors)
//   dvChoices    - 4 possible answers for "What is the DV?" (correct + 3 distractors)
//   explanation  - shown to students after they answer, explaining the correct answer
//
// To add more variety later, copy an existing object inside any topic's
// array and edit its fields.

const scenarios = {
  "Animals": [
    {
      "text": "A student studying pillbug behavior placed ten pillbugs in a plastic container lined with a dry paper towel and placed another ten pillbugs in an identical container lined with a paper towel that had been thoroughly dampened with water. Both containers were covered with breathable mesh, kept in the same room away from direct sunlight, and left undisturbed for twenty minutes. After the twenty minutes had passed, the student counted how many pillbugs in each container were actively moving around versus how many were curled into a resting position. The counts from both containers were compared to see whether the moisture level of the paper towel had any relationship to how active the pillbugs were.",
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
      "explanation": "The factor that was changed on purpose was the moisture of the paper towel (dry vs. damp) — that's the independent variable. What was measured, and could change as a result, was how many pillbugs were moving versus resting — that's the dependent variable. The container size, mesh cover, and observation time were kept the same in both containers, so they can't be the answer."
    },
    {
      "text": "A student interested in insect behavior placed five crickets in a mesh enclosure kept at room temperature in a quiet corner of a garage, and placed five more crickets, purchased from the same batch, in an identical mesh enclosure that was set inside a small insulated cooler warmed gently with a heating pad to a noticeably higher temperature. Both enclosures contained the same type of bedding, the same amount of food and water, and were shielded from direct light. After allowing thirty minutes for the crickets to settle, the student used a stopwatch to count the number of chirps produced by the crickets in each enclosure during a one-minute interval, repeating the count three times per enclosure. The chirp counts from the warmer enclosure were then compared with the chirp counts from the room-temperature enclosure.",
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
      "explanation": "Temperature was the one thing purposely changed between the two enclosures, making it the independent variable. The chirp count is what was measured to see if it changed, making it the dependent variable. Bedding, food, water, and settling time were identical in both enclosures."
    },
    {
      "text": "A student caring for two identical small aquariums set up one tank with water kept at typical room temperature and a second tank with water that had been gently warmed by a few degrees using a small aquarium heater, while keeping the tank size, lighting, and number of goldfish the same in both tanks. After allowing the fish thirty minutes to adjust to their tanks, the student watched each fish closely and used a stopwatch to count how many times its gill covers opened and closed in one minute. This gill-movement count was recorded three separate times for the fish in each tank so that the counts between the warmer tank and the room-temperature tank could be compared.",
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
      "explanation": "Water temperature was the factor changed on purpose, so it's the independent variable. Gill movement count is what was measured, so it's the dependent variable. Tank size, number of fish, lighting, and adjustment time were the same for both tanks."
    },
    {
      "text": "A student studying snail movement built two identical shallow trays, lining the bottom of one tray with a smooth sheet of plastic and the bottom of the other tray with a rough sheet of sandpaper, while keeping the tray size, lighting, temperature, and number of garden snails placed in each tray the same. A piece of lettuce was placed at the far end of each tray to encourage the snails to move toward it. Using a stopwatch, the student timed how many minutes it took each snail to travel a marked distance of ten centimeters across its tray's surface. These travel times were recorded for the snails on the smooth surface and for the snails on the rough surface so the two sets of times could be compared.",
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
      "explanation": "The surface texture was deliberately changed between the two trays, so it's the independent variable. Travel time is what was measured, making it the dependent variable. The food, number of snails, lighting, and temperature stayed the same in both trays."
    },
    {
      "text": "A student observing ant activity in the backyard placed a small drop of plain water on an index card at one end of an ant trail and, several feet away along a separate section of the same trail, placed a small drop of sugar water at an identical distance and on an identical index card, keeping the time of day, weather, and location along the trail as similar as possible. Every two minutes for twenty minutes, the student counted the number of ants that had gathered at each drop. These ant counts at the plain water drop were then compared with the ant counts at the sugar water drop to see how the ants responded over time.",
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
      "explanation": "The type of liquid (plain water vs. sugar water) was the factor changed on purpose, making it the independent variable. The number of ants that showed up is what was measured, making it the dependent variable. Time of day, card type, and distance were kept as similar as possible."
    }
  ],
  "Makeup & Skincare": [
    {
      "text": "A student investigating how moisturizing products affect skin used two identical apple slices, cut from the same apple and matched as closely as possible in size and thickness, as a stand-in for skin. One apple slice was left untreated, while the other slice had a thin, even layer of lip balm spread across its cut surface. Both slices were placed on separate paper plates, left uncovered on the same countertop away from direct sunlight, and weighed on a kitchen scale at the start of the activity. Every twenty minutes for two hours, the student reweighed each slice on the same scale and recorded the mass, allowing the change in mass of the treated slice to be compared with the change in mass of the untreated slice.",
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
      "explanation": "Applying lip balm (or not) was the factor changed on purpose, so it's the independent variable. The mass lost from each slice is what was measured, so it's the dependent variable. Slice size, plate type, and location were the same for both."
    },
    {
      "text": "A student testing sun protection products placed a set of UV-color-changing beads in a small dish covered with a thin layer of clear sunscreen lotion and placed an identical set of beads, from the same bag, in an uncovered dish with no lotion applied, keeping both dishes on the same windowsill in direct sunlight at the same time of day. Every two minutes for twenty minutes, the student compared the color intensity of the beads in each dish against a printed color reference chart and recorded a numerical color rating. The color ratings of the sunscreen-covered beads were then compared with the color ratings of the uncovered beads to see how quickly each set of beads changed color in the sunlight.",
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
      "explanation": "Whether sunscreen covered the beads was the factor changed on purpose, making it the independent variable. The color rating (how much the beads changed color) is what was measured, making it the dependent variable. Dish type, location, and timing were kept the same."
    },
    {
      "text": "A student examining hair care products collected two strands of hair of equal length from the same hairbrush, leaving one strand untreated and lightly coating the other strand with a few sprays of hairspray, then allowing both strands to dry for ten minutes under identical conditions. Each strand was then taped at one end to the edge of a desk so that it extended horizontally over the side, and small paper clips were hung one at a time from the free end of each strand. The student recorded the number of paper clips each strand could support before it bent down to touch the desk surface, comparing the results for the sprayed strand with the results for the untreated strand.",
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
      "explanation": "Whether the strand was sprayed was the factor changed on purpose, making it the independent variable. The number of paper clips it could hold is what was measured, making it the dependent variable. Strand length and drying time were the same for both."
    },
    {
      "text": "A student curious about how nail polish dries applied one coat of the same nail polish to a plastic swatch card and set it on a table near a small desk fan turned on to a low speed, while applying an identical coat of polish from the same bottle to a second, identical swatch card and setting it on the same table but away from any air movement. Both swatches were prepared within a minute of each other using the same brush strokes and amount of polish. Starting at the two-minute mark, the student gently touched the edge of each swatch with a cotton swab every thirty seconds and recorded whether the polish still smudged, continuing until each swatch no longer smudged, so the drying times of the two swatches could be compared.",
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
      "explanation": "Whether air was moving across the swatch was the factor changed on purpose, making it the independent variable. Drying time is what was measured, making it the dependent variable. The polish brand, number of coats, and swatch card were identical."
    },
    {
      "text": "A student comparing cosmetic products drew an identical straight line on two separate index cards, one using a regular eyeliner pencil and one using a pencil labeled as waterproof, making sure both lines were drawn with the same pressure and length. After letting both lines dry for five minutes, the student used an eyedropper to place three drops of water directly onto each line and waited thirty seconds before gently blotting the water away with a dry paper towel. Using a ruler, the student then measured how far the line had smeared beyond its original width on each card, comparing the smear width on the card made with regular eyeliner to the smear width on the card made with waterproof eyeliner.",
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
      "explanation": "The type of eyeliner was the factor changed on purpose, making it the independent variable. The width of the smear is what was measured, making it the dependent variable. Line pressure, length, drying time, and number of water drops were kept the same."
    }
  ],
  "Sleep": [
    {
      "text": "A group of student volunteers agreed to record how many hours of sleep they got the night before a class activity, and based on their reports, the class divided them into two groups: those who had slept fewer than six hours and those who had slept eight or more hours. Each volunteer was tested individually using the same reaction-time activity, in which a partner held a ruler vertically between the volunteer's open thumb and index finger and released it without warning. The volunteer caught the ruler as quickly as possible, and the distance the ruler fell before being caught was recorded in centimeters, with each volunteer completing three trials under the same lighting and quiet conditions. The average catching distance for the group that slept fewer hours was then compared with the average catching distance for the group that slept eight or more hours.",
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
      "explanation": "Hours of sleep is the factor being compared between the two groups, making it the independent variable. Reaction distance (how far the ruler fell) is what was measured, making it the dependent variable. Lighting, number of trials, and room conditions were the same for everyone."
    },
    {
      "text": "A teacher asked student volunteers to report the number of hours they had slept the previous night and grouped them into a set who slept less than six hours and a set who slept at least eight hours. Each volunteer was shown the same list of fifteen common household words displayed on a screen for thirty seconds under the same lighting and room noise level. After the list was removed, each volunteer was given two minutes to write down as many words as they could remember, and the number of correctly recalled words was recorded for every volunteer. The average number of words recalled by the group that slept fewer hours was then compared with the average number recalled by the group that slept eight or more hours.",
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
      "explanation": "Hours of sleep is what separated the two groups, making it the independent variable. The number of words remembered is what was measured, making it the dependent variable. The list itself, display time, lighting, and noise level were the same for everyone."
    },
    {
      "text": "Before a morning class activity, student volunteers reported how many hours of sleep they had gotten the night before, and the class organized them into a set who slept fewer than six hours and a set who slept seven or more hours. Each volunteer was given an identical worksheet containing thirty simple addition and subtraction problems and was given exactly three minutes to complete as many problems as possible, working alone at a quiet desk. When time was called, the worksheets were collected and the number of correctly solved problems was counted for each volunteer. The average number of correct answers from the group that slept fewer hours was then compared with the average number of correct answers from the group that slept seven or more hours.",
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
      "explanation": "Hours of sleep is the factor being compared, making it the independent variable. The number of correct answers is what was measured, making it the dependent variable. The worksheet, time limit, and working conditions were identical for both groups."
    },
    {
      "text": "Student volunteers reported their previous night's total hours of sleep at the start of class, and the group was separated into those who slept less than six hours and those who slept eight or more hours. Each volunteer then attempted the same balance activity, standing on one foot with arms crossed and eyes closed on a flat, carpeted section of the classroom floor, while a partner used a stopwatch to time how many seconds passed before the volunteer's raised foot touched the ground or their arms uncrossed for balance. Each volunteer completed three timed attempts under the same conditions, and the longest balance time for each volunteer was recorded. The balance times of the group that slept fewer hours were then compared with the balance times of the group that slept eight or more hours.",
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
      "explanation": "Hours of sleep is what separated the two groups, making it the independent variable. Balance time is what was measured, making it the dependent variable. The flooring, number of attempts, and conditions were the same for everyone."
    },
    {
      "text": "At the beginning of a class period, student volunteers reported the number of hours of sleep they had gotten the previous night and were sorted into a group that slept fewer than six hours and a group that slept eight or more hours. Each volunteer was handed an identical short paragraph containing twenty intentionally placed spelling and punctuation errors and was given exactly four minutes to circle as many errors as they could find while working silently at their own desk. After time was called, the paragraphs were collected and the number of correctly identified errors was counted for each volunteer. The average number of errors found by the group that slept fewer hours was then compared with the average number found by the group that slept eight or more hours.",
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
      "explanation": "Hours of sleep is the factor being compared, making it the independent variable. The number of errors found is what was measured, making it the dependent variable. The paragraph, time limit, and setting were identical for both groups."
    }
  ],
  "Farm & Agriculture": [
    {
      "text": "A student growing bean plants for a class garden project filled ten small paper cups with the same amount of potting soil and planted one soaked bean seed in each cup. Five of the cups received a measured amount of water mixed with liquid plant fertilizer each time they were watered, while the other five cups received the same amount of plain water on the same watering schedule, with all ten cups placed together on the same sunny windowsill. Every three days for three weeks, the student measured the height of each seedling from the soil surface to its tallest point using a ruler and recorded the measurements in a table. At the end of three weeks, the average height of the seedlings that received fertilizer was compared with the average height of the seedlings that received only plain water.",
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
      "explanation": "Whether fertilizer was added is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Cup type, soil amount, sunlight, and watering schedule were the same for all ten cups."
    },
    {
      "text": "A student researching crop care planted radish seeds in twelve identical small pots filled with the same type and amount of soil, then placed all twelve pots on the same table under the same grow light. Six of the pots were watered with two tablespoons of water each day, while the other six pots were watered with one tablespoon of water each day, with every other aspect of their care kept exactly the same. After two weeks, the student carefully removed each radish plant from its pot, measured the length of its root from the base of the stem to the tip using a ruler, and recorded the measurement. The average root length of the plants that received the larger daily amount of water was then compared with the average root length of the plants that received the smaller daily amount.",
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
      "explanation": "The daily amount of water is the factor that was changed on purpose, making it the independent variable. Root length is what was measured, making it the dependent variable. Soil type, pot type, and light source were identical for all twelve pots."
    },
    {
      "text": "A student studying planting conditions filled one seed tray with plain sand and an identical seed tray with nutrient-rich potting soil, planting twenty corn seeds from the same seed packet in each tray at the same depth. Both trays were placed side by side on the same windowsill, watered with the same amount of water on the same schedule, and received the same number of hours of sunlight each day. Every day for ten days, the student counted how many seeds in each tray had visibly sprouted above the surface and recorded the running total. At the end of the ten days, the total number of seeds that sprouted in the sand tray was compared with the total number that sprouted in the potting soil tray.",
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
      "explanation": "Soil type is the factor changed on purpose, making it the independent variable. The number of seeds that sprouted is what was measured, making it the dependent variable. The number of seeds planted, watering, sunlight, and planting depth were the same for both trays."
    },
    {
      "text": "A student exploring greenhouse conditions placed one set of six lettuce seedlings under a grow lamp set on a timer to provide eight hours of light per day and placed an identical set of six lettuce seedlings, planted in the same type of soil and cups, under an identical grow lamp set on a timer to provide fourteen hours of light per day, with both groups kept at the same room temperature and watered the same amount on the same schedule. Every four days for two weeks, the student measured the height of each seedling from the soil to its tallest leaf using a ruler and recorded the measurements. The average seedling height under the eight-hour light schedule was then compared with the average seedling height under the fourteen-hour light schedule.",
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
      "explanation": "Hours of light per day is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Soil type, cups, temperature, and watering were the same for both groups."
    },
    {
      "text": "A student comparing natural growing methods prepared a batch of compost tea by soaking a scoop of finished compost in water overnight and straining out the solids. Six tomato seedlings of similar size were watered with this compost tea twice a week, while six other tomato seedlings, planted in identical pots with the same soil, were watered with the same amount of plain water on the same schedule, with all twelve pots kept together on the same patio receiving equal sunlight. Once a week for four weeks, the student measured each seedling's height from the soil line to its topmost leaf using a measuring tape and recorded the results. The average height of the seedlings watered with compost tea was then compared with the average height of the seedlings watered with plain water.",
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
      "explanation": "The watering solution (compost tea vs. plain water) is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Pot type, soil, sunlight, and watering frequency were the same for all twelve seedlings."
    }
  ],
  "Social Media & Technology": [
    {
      "text": "A group of student volunteers each had their resting heart rate measured using two fingers pressed gently against the wrist while counting beats for thirty seconds and doubling the count. Half of the volunteers were then given a tablet and asked to scroll through a social media app for ten minutes, while the other half sat quietly in the same room for ten minutes without any phone, tablet, or reading material. Immediately afterward, each volunteer's heart rate was measured again in the exact same way. The change in heart rate for the volunteers who scrolled through social media was then compared with the change in heart rate for the volunteers who sat quietly.",
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
      "explanation": "The activity (scrolling vs. sitting quietly) is the factor changed on purpose, making it the independent variable. The change in heart rate is what was measured, making it the dependent variable. The room, device, and time length were the same for both groups."
    },
    {
      "text": "Student volunteers were split into two groups for a classroom activity, with one group spending fifteen minutes scrolling through a social media app on a tablet and the other group spending fifteen minutes sitting quietly at their desks with no phone or tablet in front of them. Immediately after the fifteen minutes ended, every volunteer was given an identical short paragraph containing twenty intentionally placed spelling errors and was given four minutes to circle as many errors as they could find. The paragraphs were then collected, and the number of correctly identified errors for the group that had used social media was compared with the number identified by the group that sat quietly.",
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
      "explanation": "The activity beforehand (social media vs. sitting quietly) is the factor changed on purpose, making it the independent variable. The number of errors found is what was measured, making it the dependent variable. The paragraph and time limit were identical for both groups."
    },
    {
      "text": "A teacher organized student volunteers into two groups for an afternoon activity: one group used a tablet to browse a social media app for ten minutes, while the other group spent the same ten minutes solving a simple word puzzle on paper, with both groups seated in the same quiet room. Immediately afterward, every volunteer was shown the same list of fifteen common words on a screen for thirty seconds and then asked to write down as many words as they could remember within two minutes. The average number of words correctly recalled by the group that had used social media was then compared with the average number recalled by the group that solved the word puzzle.",
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
      "explanation": "The activity beforehand is the factor changed on purpose, making it the independent variable. The number of words remembered is what was measured, making it the dependent variable. The word list, display time, and room were the same for both groups."
    },
    {
      "text": "Before a classroom activity, student volunteers rated their current mood on a simple scale from one to ten. The volunteers were then divided into two groups: one group spent twelve minutes scrolling through a social media app on a tablet, while the other group spent the same twelve minutes reading a printed magazine article, both in the same quiet classroom. Immediately after the twelve minutes, each volunteer rated their mood again on the same one-to-ten scale. The change in mood rating for the group that used social media was then compared with the change in mood rating for the group that read the printed article.",
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
      "explanation": "The activity (social media vs. reading) is the factor changed on purpose, making it the independent variable. The change in mood rating is what was measured, making it the dependent variable. The activity length, room, and rating scale were the same for both groups."
    },
    {
      "text": "A student designed a classroom activity in which volunteers were asked to complete the same word-search puzzle while holding a tablet displaying a social media app. One group completed the puzzle while the tablet was set to silent with no interruptions, while a second group completed the identical puzzle while the tablet delivered a notification sound and on-screen alert every thirty seconds, with both groups working at similar desks in the same room. Using a stopwatch, the student recorded how many minutes it took each volunteer to finish the word-search puzzle. The completion times of the group that received frequent notifications were then compared with the completion times of the group that worked without any notifications.",
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
      "explanation": "Whether notifications interrupted the volunteer is the factor changed on purpose, making it the independent variable. Completion time is what was measured, making it the dependent variable. The puzzle itself and the desk setup were the same for both groups."
    }
  ],
  "Food & Nutrition": [
    {
      "text": "A student investigating food preservation cut a fresh apple into slices of equal size and thickness. Half of the slices were dipped briefly in a small dish of lemon juice, while the other half were dipped for the same amount of time in a dish of plain water, and both sets of slices were then placed on separate labeled plates left uncovered on the same countertop at room temperature. Every fifteen minutes for one hour, the student compared the color of each slice against a simple scale ranging from light yellow to deep brown and recorded a rating for every slice. The browning ratings of the slices dipped in lemon juice were then compared with the browning ratings of the slices dipped in plain water.",
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
      "explanation": "The liquid used (lemon juice vs. plain water) is the factor changed on purpose, making it the independent variable. The browning rating is what was measured, making it the dependent variable. Slice size, plate type, and location were the same for both sets."
    },
    {
      "text": "A student studying fermentation filled one small bottle with warm water and a teaspoon of sugar and filled an identical bottle with the same amount of warm water but no sugar at all, then stirred a measured, identical amount of active dry yeast into each bottle. A balloon was immediately stretched over the mouth of each bottle, and both bottles were placed side by side in the same warm spot away from drafts. Every five minutes for thirty minutes, the student measured the circumference of each balloon with a length of string and a ruler as it inflated with the gas produced by the yeast. The balloon sizes on the bottle containing sugar were then compared with the balloon sizes on the bottle without sugar.",
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
      "explanation": "Whether sugar was added is the factor changed on purpose, making it the independent variable. Balloon size is what was measured, making it the dependent variable. The amount of yeast, water temperature, and bottle type were the same for both."
    },
    {
      "text": "A student exploring how temperature affects fermentation mixed an identical amount of sugar and active dry yeast into two separate small bottles, filling one bottle with warm tap water and the other identical bottle with cold water straight from the refrigerator. A balloon was stretched securely over the opening of each bottle immediately after mixing, and both bottles were placed on the same counter, away from any drafts or direct sunlight. Every five minutes for thirty minutes, the student measured the circumference of each inflating balloon using a piece of string and a ruler and recorded the measurements. The balloon sizes on the bottle filled with warm water were then compared with the balloon sizes on the bottle filled with cold water.",
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
      "explanation": "Water temperature is the factor changed on purpose, making it the independent variable. Balloon size is what was measured, making it the dependent variable. The amount of sugar and yeast, and the bottle and balloon type, were the same for both."
    },
    {
      "text": "A student modeling the effect of acidic drinks on tooth enamel placed one clean eggshell fragment into a cup filled with full-strength white vinegar and placed an identical eggshell fragment, taken from the same egg, into a cup filled with vinegar that had been diluted with an equal amount of water, keeping both cups at the same room temperature and covered loosely with plastic wrap. Every twenty minutes for two hours, the student removed each eggshell fragment with a spoon, gently blotted it dry with a paper towel, and pressed on its surface with a fingernail to rate how soft and crumbly it had become on a simple one-to-five scale before returning it to its cup. The softness ratings for the eggshell in full-strength vinegar were then compared with the softness ratings for the eggshell in diluted vinegar.",
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
      "explanation": "Vinegar concentration is the factor changed on purpose, making it the independent variable. The softness rating is what was measured, making it the dependent variable. Fragment size, room temperature, and covering were the same for both cups."
    },
    {
      "text": "A student researching food storage placed one slice of bread from the same loaf into a sealed plastic bag that had a small amount of water sprayed inside before sealing, and placed a second slice from the same loaf into an identical sealed plastic bag with no water added, then stored both bags in the same dark cabinet at the same temperature. Each day for two weeks, the student observed each bag without opening it and estimated the percentage of the bread's surface covered in visible mold, recording the estimate in a data table. The mold coverage on the bread stored with added moisture was then compared with the mold coverage on the bread stored without added moisture.",
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
      "explanation": "Whether moisture was added is the factor changed on purpose, making it the independent variable. Mold coverage is what was measured, making it the dependent variable. The loaf, storage cabinet, and temperature were the same for both bags."
    }
  ],
  "Exercise & Fitness": [
    {
      "text": "A group of student volunteers each had their resting heart rate measured by counting the pulse at the wrist for thirty seconds and doubling the number. Half of the volunteers then did one minute of jumping jacks, while the other half sat quietly in their seats for the same one minute, with both groups in the same room at the same temperature. Immediately afterward, every volunteer's heart rate was measured again using the same thirty-second counting method. The increase in heart rate for the volunteers who did jumping jacks was then compared with the change in heart rate for the volunteers who sat quietly.",
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
      "explanation": "The activity (jumping jacks vs. sitting) is the factor changed on purpose, making it the independent variable. The change in heart rate is what was measured, making it the dependent variable. Room temperature, timing method, and activity length were the same for both groups."
    },
    {
      "text": "A student studying exercise habits asked volunteers to march in place for as long as they comfortably could while listening to music through headphones. Half of the volunteers listened to a song with a slow, calm tempo, while the other half listened to a different song with a fast, upbeat tempo, with both groups marching in the same room under the same conditions and instructed to stop as soon as they felt tired. Using a stopwatch, the student recorded how many minutes each volunteer marched before stopping. The average marching time for the volunteers who listened to the slow tempo song was then compared with the average marching time for the volunteers who listened to the fast tempo song.",
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
      "explanation": "Music tempo is the factor changed on purpose, making it the independent variable. Marching time is what was measured, making it the dependent variable. The room, headphones, and instructions to stop when tired were the same for both groups."
    },
    {
      "text": "A student examining warm-up routines had one group of volunteers perform five minutes of light stretching exercises before attempting a sit-and-reach flexibility test, in which each volunteer sat on the floor with legs straight and reached forward along a ruler taped to the floor as far as possible without bending their knees. A second group of volunteers attempted the identical sit-and-reach test without doing any stretching beforehand, having instead sat quietly for the same five minutes. The distance each volunteer reached along the ruler was recorded in centimeters, and the average reach distance of the group that stretched beforehand was compared with the average reach distance of the group that did not stretch.",
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
      "explanation": "Whether stretching happened beforehand is the factor changed on purpose, making it the independent variable. Reach distance is what was measured, making it the dependent variable. The ruler, leg position, and five-minute period were the same for both groups."
    },
    {
      "text": "A student studying the role of water intake in physical activity had one group of volunteers drink a full cup of water fifteen minutes before an activity, while a second group of volunteers drank no water at all during that same fifteen-minute period, with both groups resting quietly in the same room beforehand. Each volunteer then performed jumping jacks continuously for as long as they were able, and the student used a stopwatch to time how many minutes each volunteer lasted before needing to stop and rest. The average time lasted by the volunteers who drank water beforehand was then compared with the average time lasted by the volunteers who did not drink water.",
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
      "explanation": "Whether water was consumed beforehand is the factor changed on purpose, making it the independent variable. How long the volunteer lasted is what was measured, making it the dependent variable. The resting room, rest period, and exercise type were the same for both groups."
    },
    {
      "text": "A student researching muscle fatigue asked volunteers to squeeze a clothespin open and closed as many times as possible in thirty seconds, and recorded each volunteer's count. Immediately afterward, half of the volunteers were given a two-minute rest period before repeating the same thirty-second clothespin squeezing test, while the other half repeated the test with no rest period at all, going straight into the second round. The number of squeezes completed in the second round was recorded for every volunteer. The change between the first and second round counts for the volunteers who rested was then compared with the change for the volunteers who had no rest period.",
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
      "explanation": "Whether a rest period was given is the factor changed on purpose, making it the independent variable. The number of squeezes in the second round is what was measured, making it the dependent variable. The clothespin, round length, and first-round procedure were the same for everyone."
    }
  ],
  "Plants & Gardening": [
    {
      "text": "A student growing bean seedlings for a science project placed one seedling under a lamp fitted with a red-colored plastic filter and placed an identical seedling, planted in the same type of pot and soil, under an identical lamp with no colored filter, providing plain white light instead. Both lamps were set on timers to provide the same number of hours of light each day, and both seedlings were watered with the same amount of water on the same schedule. Every three days for two weeks, the student measured the height of each seedling from the soil to its tallest point using a ruler and recorded the measurement. The average growth of the seedling under the red filter was then compared with the average growth of the seedling under plain white light.",
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
      "explanation": "The color of light is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Pot, soil, watering, and hours of light per day were the same for both seedlings."
    },
    {
      "text": "A student investigating environmental effects on plants placed one potted bean seedling near a small speaker that played recorded music for two hours every day and placed an identical seedling, in the same type of pot and soil, in a silent room with no speaker at all, keeping both plants at the same distance from a window and watering them with the same amount of water on the same schedule. Every four days for three weeks, the student measured the height of each plant from the soil to its tallest leaf using a ruler and recorded the measurement. The average height of the plant exposed to music was then compared with the average height of the plant kept in silence.",
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
      "explanation": "Whether music was played is the factor changed on purpose, making it the independent variable. Plant height is what was measured, making it the dependent variable. Distance from the window, pot, soil, and watering schedule were the same for both plants."
    },
    {
      "text": "A student comparing water sources for houseplants watered one small potted plant exclusively with tap water and watered an identical potted plant, of the same species and starting size, exclusively with distilled water, giving both plants the same amount of water on the same schedule and keeping them side by side on the same windowsill. Once a week for four weeks, the student counted the number of healthy green leaves on each plant and recorded the count in a data table. The leaf counts for the plant watered with tap water were then compared with the leaf counts for the plant watered with distilled water.",
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
      "explanation": "The type of water is the factor changed on purpose, making it the independent variable. The number of healthy leaves is what was measured, making it the dependent variable. Amount of water, schedule, and plant species were the same for both."
    },
    {
      "text": "A student researching plant nutrients dissolved a small measured amount of Epsom salt into the water used for one potted tomato seedling and used the same amount of plain, untreated water for an identical tomato seedling planted in the same type of soil and pot, keeping both plants on the same sunny porch and watering them on the same schedule. Once a week for three weeks, the student measured the height of each plant from the soil line to its tallest point using a ruler and recorded the measurement. The height of the seedling watered with the Epsom salt mixture was then compared with the height of the seedling watered with plain water.",
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
      "explanation": "Whether Epsom salt was added is the factor changed on purpose, making it the independent variable. Seedling height is what was measured, making it the dependent variable. Soil, pot, sunlight, and watering schedule were the same for both seedlings."
    },
    {
      "text": "A student exploring natural soil additives mixed a scoop of used coffee grounds into the top layer of soil in one potted marigold plant and left the soil of an identical potted marigold plant, planted at the same time in the same type of pot, completely unchanged, keeping both plants next to each other on the same patio and watering them the same amount on the same schedule. Every five days for three weeks, the student measured the height of each marigold from the soil to its tallest bloom or leaf using a ruler and recorded the measurement. The growth of the marigold grown in soil mixed with coffee grounds was then compared with the growth of the marigold grown in unchanged soil.",
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
      "explanation": "Whether coffee grounds were added is the factor changed on purpose, making it the independent variable. Plant height is what was measured, making it the dependent variable. Pot type, watering, and location were the same for both marigolds."
    }
  ],
  "Household Germs & Cleaning": [
    {
      "text": "A student investigating hand hygiene asked two volunteers to handle a slice of bread from the same loaf using their bare hands after touching several classroom surfaces such as doorknobs and desks. One volunteer first cleaned their hands thoroughly with hand sanitizer and let it dry completely before touching their bread slice, while the other volunteer touched their bread slice without using any hand sanitizer at all. Each touched slice was sealed in an identical plastic bag and stored in the same dark cabinet at the same temperature. Every day for two weeks, the student observed each bag without opening it and estimated the percentage of the bread's surface covered in visible mold. The mold coverage on the bread touched after sanitizing was then compared with the mold coverage on the bread touched without sanitizing.",
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
      "explanation": "Whether sanitizer was used is the factor changed on purpose, making it the independent variable. Mold coverage is what was measured, making it the dependent variable. The loaf, surfaces touched beforehand, and storage conditions were the same for both slices."
    },
    {
      "text": "A student studying disinfectants swabbed the same kitchen countertop with a sterile cotton swab and wiped the swab across the surface of a prepared agar plate to introduce bacteria evenly, then repeated this process for a second identical agar plate using a fresh swab from the same spot on the counter. Before sealing the plates, the student sprayed one plate's surface lightly with a household disinfectant cleaner and let it sit for the recommended contact time, while leaving the second plate untreated. Both plates were then sealed with tape and stored in the same dark, warm location. After forty-eight hours, the student counted the number of visible bacterial colonies that had grown on each plate. The colony counts on the disinfectant-treated plate were then compared with the colony counts on the untreated plate.",
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
      "explanation": "Whether disinfectant was applied is the factor changed on purpose, making it the independent variable. The number of colonies is what was measured, making it the dependent variable. The countertop, swabbing method, and storage conditions were the same for both plates."
    },
    {
      "text": "A student researching hand-washing effectiveness had one volunteer wash their hands with soap and water for twenty seconds and dry them with a clean paper towel before pressing their fingertips onto a prepared agar plate for five seconds. A second volunteer rinsed their hands with plain water only, for the same twenty seconds, and dried them with an identical clean paper towel before pressing their fingertips onto an identical agar plate for the same five seconds. Both volunteers had performed the same classroom activities beforehand so their hands would be similarly exposed to germs. Both plates were sealed and stored together in the same warm, dark location, and after forty-eight hours the student counted the number of visible bacterial colonies on each plate. The colony count on the plate touched by the soap-washed hand was then compared with the colony count on the plate touched by the water-only rinsed hand.",
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
      "explanation": "The washing method (soap vs. water only) is the factor changed on purpose, making it the independent variable. The number of colonies is what was measured, making it the dependent variable. The prior activities, washing time, and storage conditions were the same for both volunteers."
    },
    {
      "text": "A student exploring natural cleaning solutions lightly sprayed one slice of bread from the same loaf with a mixture of vinegar and water before sealing it in a plastic bag, and sealed an identical slice of bread from the same loaf in an identical plastic bag with no spray applied at all. Both bags were stored together in the same dark cabinet at the same temperature. Each day for two weeks, the student examined each bag without opening it and estimated the percentage of visible mold coverage on the bread's surface, recording the estimate in a data table. The mold coverage on the vinegar-sprayed bread was then compared with the mold coverage on the untreated bread.",
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
      "explanation": "Whether vinegar spray was applied is the factor changed on purpose, making it the independent variable. Mold coverage is what was measured, making it the dependent variable. The loaf, storage cabinet, and observation period were the same for both bags."
    },
    {
      "text": "A student testing cleaning product instructions wiped one section of a classroom desk with a disinfectant wipe and let it air dry for the full time listed on the product's label before pressing a sterile cotton swab onto the surface and transferring it onto a prepared agar plate. On a second, identical section of the same desk, the student wiped with an identical disinfectant wipe but pressed the swab onto the surface after only ten seconds, well before the recommended drying time had passed, and transferred that swab onto an identical agar plate. Both plates were sealed and stored together in the same warm, dark location. After forty-eight hours, the student counted the number of visible bacterial colonies on each plate and compared the colony count from the full-drying-time section with the colony count from the section swabbed early.",
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
      "explanation": "The drying time before swabbing is the factor changed on purpose, making it the independent variable. The number of colonies is what was measured, making it the dependent variable. The desk, wipe brand, and storage conditions were the same for both sections."
    }
  ],
  "Music & Sound": [
    {
      "text": "A student studying focus and sound asked volunteers to complete an identical word-search puzzle while listening to music through headphones. Half of the volunteers listened to a song with a slow, calm tempo, while the other half listened to a different song with a fast, upbeat tempo, with both groups seated at similar desks in the same room. Using a stopwatch, the student recorded how many minutes it took each volunteer to find every word in the puzzle. The average completion time for the volunteers who listened to the slow tempo song was then compared with the average completion time for the volunteers who listened to the fast tempo song.",
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
      "explanation": "Music tempo is the factor changed on purpose, making it the independent variable. Completion time is what was measured, making it the dependent variable. The desk, puzzle, room, and headphones were the same for both groups."
    },
    {
      "text": "A teacher organized volunteers into two groups for a classroom activity: one group sat in silence while studying a list of fifteen common words displayed on a screen for thirty seconds, and the other group studied the identical list for the same thirty seconds while quiet instrumental music played softly in the background. After the list was removed, every volunteer was given two minutes to write down as many words as they could remember. The average number of words correctly recalled by the group that studied in silence was then compared with the average number recalled by the group that studied with music playing.",
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
      "explanation": "Whether background music played is the factor changed on purpose, making it the independent variable. The number of words remembered is what was measured, making it the dependent variable. The word list, display time, and time to write answers were the same for both groups."
    },
    {
      "text": "A student investigating how sound affects the body measured the resting heart rate of each volunteer by counting the pulse at the wrist for thirty seconds and doubling the count. Volunteers then listened through headphones to the same one-minute audio clip, with half of the volunteers hearing the clip played at a low volume and the other half hearing the identical clip played at a noticeably louder volume, with both groups seated quietly in the same room. Immediately after the clip ended, each volunteer's heart rate was measured again using the same method. The change in heart rate for the volunteers who heard the louder volume was then compared with the change in heart rate for the volunteers who heard the lower volume.",
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
      "explanation": "Volume is the factor changed on purpose, making it the independent variable. The change in heart rate is what was measured, making it the dependent variable. The audio clip length, pulse-counting method, and room were the same for both groups."
    },
    {
      "text": "A student researching sound and concentration gave volunteers an identical worksheet of thirty simple math problems to solve in three minutes. Half of the volunteers worked in a silent room, while the other half worked in an identical room with a small fan providing steady background white noise, with both rooms kept at the same temperature and lighting. When time was called, the worksheets were collected and the number of correctly solved problems was counted for each volunteer. The average number of correct answers from the volunteers who worked in silence was then compared with the average number of correct answers from the volunteers who worked with white noise playing.",
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
      "explanation": "Whether white noise played is the factor changed on purpose, making it the independent variable. The number of correct answers is what was measured, making it the dependent variable. The worksheet, time limit, temperature, and lighting were the same for both groups."
    },
    {
      "text": "A student exploring how sound might influence quick reactions had volunteers complete the same ruler-drop reaction test, in which a partner released a ruler between the volunteer's open fingers without warning and the volunteer caught it as quickly as possible, with the distance the ruler fell recorded in centimeters. Half of the volunteers completed three trials of this test while listening to fast-paced, high-energy music through headphones, while the other half completed the identical three trials while listening to slow, calm instrumental music, with both groups tested in the same quiet room. The average catching distance for the volunteers who listened to fast-paced music was then compared with the average catching distance for the volunteers who listened to calm music.",
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
      "explanation": "The type of music is the factor changed on purpose, making it the independent variable. Reaction distance is what was measured, making it the dependent variable. The number of trials and testing room were the same for both groups."
    }
  ]
};
