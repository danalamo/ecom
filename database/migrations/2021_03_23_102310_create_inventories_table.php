<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('product_id');
            $table->unsignedInteger('quantity');
            $table->string('color');
            $table->string('size');
            $table->unsignedInteger('weight');
            $table->unsignedInteger('price_cents');
            $table->unsignedInteger('sale_price_cents');
            $table->unsignedInteger('cost_cents');
            $table->string('sku');
            $table->unsignedInteger('length');
            $table->unsignedInteger('width');
            $table->unsignedInteger('height');
            $table->string('note');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('inventories');
    }
}
