puts "🌱 Seeding parties..."

# Seed your database here

puts "Seeding Party 1..."
#Party 1
#user_id fix throughout code???
#fix party_id to 'party' throughout code???
party_one = Party.create(name: "The Full Stack", campaign: "Sinatra's Shadow", DM: "Dr. Ruby", description: "On a quest to defeat the evil sorcerer Sinatra, our adventurers travel through a land of riches and rubys reacting to the foul plots of their foe.", user_id: 1)

Member.create(character_name: "Scoots McCool", player_name: "Logan", class_name: "Bard", race: "Kenku", level: 11, alignment: "Chaotic Neutral", party: party_one)
Member.create(character_name: "Sir CodesALot", player_name: "Min", class_name: "Wizard", race: "Half-Elf", level: 12, alignment: "Chaotic Good", party: party_one)
Member.create(character_name: "Ruby Rose", player_name: "Dan", class_name: "Fighter", race: "Goliath", level: 11, alignment: "Neutral", party: party_one)
Member.create(character_name: "Regis Spellman", player_name: "Emily", class_name: "Sorcerer", race: "Gnome", level: 12, alignment: "Chaotic Good", party: party_one)
Member.create(character_name: "Sunny", player_name: "Eileen", class_name: "Cleric", race: "Human", level: 11, alignment: "Lawful Good", party: party_one)

User.create(name: "Logan", email: "logan@example.com", password: "Logan12345")
User.create(name: "Min", email: "min@example.com", password: "Min12345")
User.create(name: "Dan", email: "dan@example.com", password: "Dan12345")
User.create(name: "Emily", email: "emily@example.com", password: "Emily12345")
User.create(name: "Eileen", email: "eileen@example.com", password: "Eileen12345")

# Party 2
puts "Seeding Party 2..."
party_two = Party.create(name: "The Rubyists", campaign: "Dragons R Bad", DM: "Matt Mercer", description: "Dragons R Bad, but not all heroes are good. Our group of adventurers saves the day and fills their coin purses are the same time.", user_id: 2)

Member.create(character_name: "Mama Mia", player_name: "Trillby", class_name: "Bard", race: "Elf", level: 16, alignment: "Neutral", party: party_two)
Member.create(character_name: "Grendel's Mother", player_name: "Morgan", class_name: "Barbarian", race: "Half-Orc", level: 17, alignment: "Chaotic Evil", party: party_two)
Member.create(character_name: "Carrot", player_name: "Chong", class_name: "Monk", race: "Half-Elf", level: 16, alignment: "Neutral Evil", party: party_two)
Member.create(character_name: "Penelope", player_name: "Victor", class_name: "Druid", race: "Half-Elf", level: 16, alignment: "Neutral Evil", party: party_two)
Member.create(character_name: "Tzu", player_name: "Melanie", class_name: "Fighter", race: "Half-Elf", level: 16, alignment: "Lawful Evil", party: party_two)

User.create(name: "Trillby", email: "trillby@example.com", password: "Trillby12345")
User.create(name: "Morgan", email: "morgan@example.com", password: "Morgan12345")
User.create(name: "Chong", email: "chong@example.com", password: "Chong12345")
User.create(name: "Victor", email: "victor@example.com", password: "Victor12345")
User.create(name: "Melanie", email: "melanie@example.com", password: "Melanie12345")

# Party 3
puts "Seeding Party 3..."

party_three = Party.create(name: "The React Riders", campaign: "The Devils in the Details", DM: "Aabria Iyengar", description: "A smol band of adventurers accidentally made a deal with a dastardly organization of devils. They must follow the orders of the devils while avoiding evil and working in secret to break their bonds to the fiends.", user_id: 3)

Member.create(character_name: "Flint McShooty", player_name: "Rafaella", class_name: "Artificer", race: "Dwarf", level: 8, alignment: "Lawful Neutral", party: party_three)
Member.create(character_name: "Dark Jessica", player_name: "Jessica", class_name: "Warlock", race: "Halfling", level: 8, alignment: "Chaotic Neutral", party: party_three)
Member.create(character_name: "The Biggun", player_name: "Phil", class_name: "Barbarian", race: "Gnome", level: 8, alignment: "Chaotic Neutral", party: party_three)
Member.create(character_name: "Duke Elliot", player_name: "Xavier", class_name: "Paladin", race: "Kobold", level: 9, alignment: "Chaotic Good", party: party_three)
Member.create(character_name: "Amoeba Joe", player_name: "Kellen", class_name: "Rogue", race: "Gnome", level: 8, alignment: "Chaotic Good", party: party_three)

User.create(name: "Rafaella", email: "rafaella@example.com", password: "Rafaella12345")
User.create(name: "Jessica", email: "jessica@example.com", password: "Jessica12345")
User.create(name: "Phil", email: "phil@example.com", password: "Phil12345")
User.create(name: "Xavier", email: "xavier@example.com", password: "Xavier12345")
User.create(name: "Kellen", email: "kellen@example.com", password: "Kellen12345")

puts "✅ Done seeding!"
