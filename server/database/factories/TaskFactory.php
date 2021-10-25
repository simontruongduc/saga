<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\App\Task::class, function (Faker $faker) {
    return [
        'title' => $faker->title,
        'description' => \Illuminate\Support\Str::random(20),
        'status' => rand(0,2)
    ];
});
