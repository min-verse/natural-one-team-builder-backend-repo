class Member < ActiveRecord::Base
    belongs_to :party
    validates :character_name, :player_name, :race, :level, :alignment, presence: true

end