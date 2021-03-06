<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class LessonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 'email' => Str::random(10).'@gmail.com',
        // 'password' => bcrypt('password'),

        DB::table('lessons')->insert([
            'name' => "Lesson 1 - Routing",
            'link' => "https://laravel.com/docs/5.8/routing",
            'topic' => "PHP",
        ]);
        DB::table('lessons')->insert([
            'name' => "Lesson 2 - Middleware",
            'link' => "https://laravel.com/docs/5.8/middleware",
            'topic' => "PHP",
        ]);
        DB::table('lessons')->insert([
            'name' => "Lesson 3 - Requests",
            'link' => "https://laravel.com/docs/5.8/requests",
            'topic' => "PHP",
        ]);
        DB::table('lessons')->insert([
            'name' => "Lesson 4 - Responses",
            'link' => "https://laravel.com/docs/5.8/responses",
            'topic' => "PHP",
        ]);
        DB::table('lessons')->insert([
            'name' => "Lesson 5 - Views",
            'link' => "https://laravel.com/docs/5.8/views",
            'topic' => "PHP",
        ]);
    }
}
