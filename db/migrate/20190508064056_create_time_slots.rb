class CreateTimeSlots < ActiveRecord::Migration[5.2]
  def change
    create_table :time_slots do |t|
      t.datetime :time
      t.date :date
      t.integer :discount
      t.integer :capacity
      t.references :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
