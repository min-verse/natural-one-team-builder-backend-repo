class Party < ActiveRecord::Base
    has_many :members
    belongs_to :user
    validates :name, :campaign, :DM, :description, :user_id, presence: true
    validates :name, uniqueness: true
end