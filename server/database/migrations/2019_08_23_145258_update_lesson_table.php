<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateLessonTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table("lessons", function(Blueprint $table) {
//            $table->unique("username");
//            $table->unique("email");
            $table
                ->string('topic')
                ->after("name");
        });

//        Schema::create('lessons', function (Blueprint $table) {
//            $table->bigIncrements('id');
//            $table->string('name');
////            $table->string('topic');
//            $table->foreign('topic_id')->references('id')->on('topics');
//            $table->string('link' , 512);
//            $table->timestamps();
//        });
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
