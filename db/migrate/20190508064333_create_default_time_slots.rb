class CreateDefaultTimeSlots < ActiveRecord::Migration[5.2]
  def change
    create_table :default_time_slots do |t|
      t.time :time
      t.integer :weekday
      t.integer :discount
      t.integer :capacity
      t.references :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
