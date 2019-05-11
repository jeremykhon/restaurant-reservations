class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :table_size
      t.references :time_slot, foreign_key: true
      t.references :user, foreign_key: true
      t.references :restaurant, foreign_key: true
      t.string :name
      t.string :email
      t.string :number
      t.datetime :time
      t.string :date
      t.integer :discount

      t.timestamps
    end
  end
end
