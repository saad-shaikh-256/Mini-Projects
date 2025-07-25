document.getElementById("generateStory").addEventListener("click", function () {
  let name = document.getElementById("name").value.trim();
  let place = document.getElementById("place").value.trim();
  let object = document.getElementById("object").value.trim();
  let action = document.getElementById("action").value.trim();
  let storyOutput = document.getElementById("storyOutput");

  if (name === "" || place === "" || object === "" || action === "") {
    alert("Please fill in all fields.");
    return;
  }

  let stories = [
    `One day, ${name} went to ${place} and found a mysterious ${object}. Without thinking, ${name} decided to ${action}, and something magical happened!`,
    `In the heart of ${place}, ${name} discovered a hidden ${object}. As curiosity took over, ${name} started to ${action}, and the adventure began!`,
    `${name} was walking through ${place} when suddenly a ${object} appeared. Without hesitation, ${name} chose to ${action}, leading to an unforgettable experience!`,
    `While exploring ${place}, ${name} saw a sparkling ${object}. As soon as they touched it, they were transported to a new world where they had to ${action} to find a way back home!`,
    `One night at ${place}, ${name} found an ancient ${object}. The moment they tried to ${action}, the object began to glow, revealing a hidden secret!`,
    `At ${place}, ${name} was given a strange ${object} by an old wise person. They were told that if they ${action} at the right moment, something incredible would happen!`,
    `${name} was cleaning their attic when they stumbled upon an old ${object}. Curious, they decided to ${action}, and suddenly, they were taken on a journey through time!`,

    `In the enchanted lands of ${place}, ${name} stumbled upon an ancient map leading to a legendary ${object}. Guided by fate and fire, they braved mythical beasts and dark magic, determined to ${action} and restore peace to the forgotten realm.`,

    `Years into the future, on the dusty planet of ${place}, ${name} unearthed a lost alien ${object}. With time running out, they activated it and raced to ${action} before the black hole devoured the entire colony.`,

    `Detective ${name} had been chasing shadows through ${place} for weeks. When they discovered a hidden ${object} beneath the floorboards, the clues finally came together. It was time to ${action} and solve the twisted riddle before another victim disappeared.`,

    `The walls of ${place} whispered secrets no one else could hear. ${name}, holding a rusted ${object}, descended into the basement. With every creaking step, they knew the only way to escape was to ${action} the spirit that lingered.`,

    `${name} never expected a day at ${place} to go sideways. But when a mischievous monkey stole their precious ${object}, the only option was to ${action} in front of hundreds of laughing strangers. It was embarrassing, but unforgettable.`,

    `As twilight painted the skies over ${place}, ${name} held out the glowing ${object}, a symbol of love lost and found. With a shaky breath, they chose to ${action}, hoping this moment would change everything between them.`,

    `Chaos erupted in ${place} as villains unleashed destruction. ${name}, hidden behind a mask, gripped the glowing ${object} and leapt into action. With grit and determination, they knew they had to ${action} to protect the city from collapse.`,

    `Dust swirled around ${place} as the showdown neared. ${name} holstered their trusted ${object}, locked eyes with the outlaw, and stepped forward. It was time to ${action}, not just for justice, but for the soul of the town.`,

    `In war-torn ${place}, ${name} disguised themself as a merchant to smuggle an ancient ${object} past enemy lines. Every heartbeat echoed with fear, but the mission was clear — they had to ${action} to rewrite history.`,

    `${name} clung to the cliff's edge overlooking ${place}. Their only hope lay in the mysterious ${object} they’d carried since the jungle. With courage swelling, they decided to ${action} — it was the only way forward.`,

    `At precisely midnight, ${place} came alive with whispers. ${name} stood in the center, clutching a ghostly ${object} that pulsed with energy. The only way to end the haunting was to ${action} before dawn broke.`,

    `Legends said ${place} held the gods' judgment. ${name}, carrying the divine ${object}, walked between marble statues that breathed. They would have one chance to ${action}, or be cast into eternal slumber with the forgotten heroes.`,

    `The skies above ${place} had been gray for years. ${name} uncovered a forbidden ${object} buried beneath rubble. Despite the government's watchful eyes, they chose to ${action} and ignite the spark of rebellion once again.`,

    `It started with a whisper and ended in ${place}, where ${name} traced a trail of clues to a hidden ${object}. With one final move, they would ${action}, exposing the truth behind the city's most shocking heist.`,

    `Every morning at ${place}, ${name} sat with their old ${object}, sipping coffee and thinking about the past. But today was different — they stood up, ready to ${action} and finally chase the dream they’d been ignoring.`,

    `As lightning struck ${place}, ${name} activated the ancient ${object} and fell through time. Lost in a different era, they had to ${action} before the portal vanished forever, leaving them trapped in history.`,

    `The encrypted message led ${name} to ${place}. Hidden in plain sight was a small ${object}, loaded with state secrets. They had just minutes to ${action} and escape before their cover was blown.`,

    `Gears clicked and steam hissed across ${place} as ${name} adjusted their mechanical goggles. With the bronze ${object} in hand, they climbed aboard the sky train to ${action} before it exploded into the clouds.`,

    `Shells rained down over ${place}. Amid chaos, ${name} clutched a battered ${object} — a gift from a fallen comrade. With courage in their veins, they prepared to ${action}, knowing freedom might be just one step away.`,

    `Back at ${place}, memories came flooding back. ${name} held the old ${object} that once meant everything. It was time to ${action}, to face the truth and maybe, finally, find peace.`,

    `${place} buzzed with neon lights and digital echoes. ${name} jacked into the system through a hacked ${object}. One wrong move and everything would fry — but they had to ${action} to take down the corporate grid.`,

    `Rain fell upwards at ${place} that morning. ${name}, unfazed, held their glowing ${object} and whispered a promise to ${action}. As flowers bloomed from cracks in the sidewalk, they smiled, knowing magic was real — and alive.`,

    `Alone in the wilderness of ${place}, ${name} had nothing but a worn-out ${object} and sheer willpower. Days turned to weeks, and with frostbitten hands, they chose to ${action}, refusing to let nature win.`,

    `The world had ended, but ${name} still wandered ${place}, searching for signs of life. When they found a working ${object}, hope returned. They decided to ${action} — the first step in rebuilding what was lost.`,

    `${place} was crawling with agents, but ${name} blended in effortlessly. Slipping the ${object} into a diplomat’s briefcase, they turned to ${action}, knowing extraction was only seconds away.`,

    `The halls of ${place} echoed with sorrow and candlelight. ${name}, cloaked in black, carried the cursed ${object} meant to ${action} the demon sealed beneath the floorboards for generations.`,

    `Smoke curled under the flickering streetlamp in ${place}. ${name}, tired and bruised, tossed the bloodied ${object} onto the ground. They lit a cigarette, ready to ${action} — or disappear into the night forever.`,

    `In ${place}, where animals spoke and the sun sang, ${name} found a glowing ${object} under a wishing tree. Guided by moonlight, they set off to ${action}, hoping to break the spell cast long ago.`,

    `The mirrors inside ${place} never reflected the truth. ${name} clutched the familiar ${object} and questioned reality itself. Only one path remained — to ${action}, or lose themselves forever to the delusion.`,

    `That summer in ${place} changed everything. ${name} found the old ${object} in the attic and realized the world was bigger than they'd ever imagined. With a deep breath, they chose to ${action}, finally growing into who they were meant to be.`,
  ];

  let randomStory = stories[Math.floor(Math.random() * stories.length)];
  storyOutput.innerHTML = randomStory;
  storyOutput.classList.remove("hidden");
});
