<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TopicsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('topics')->insert([
            'name' => "php",
        ]);
        DB::table('topics')->insert([
            'name' => "mysql",
        ]);
        DB::table('topics')->insert([
            'name' => "js",
        ]);
        //
    }
}
