<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('inventory_id');
            $table->string('street_address');
            $table->string('apartment');
            $table->string('city');
            $table->string('state');
            $table->string('country_code');
            $table->unsignedInteger('zip');
            $table->string('phone_number');
            $table->string('email');
            $table->string('name');
            $table->string('order_status');
            $table->string('payment_ref');
            $table->string('transaction_id');
            $table->unsignedInteger('payment_amt_cents')->nullable();
            $table->unsignedInteger('ship_charged_cents')->nullable();
            $table->unsignedInteger('ship_cost_cents')->nullable();
            $table->unsignedInteger('subtotal_cents')->nullable();
            $table->unsignedInteger('total_cents')->nullable();
            $table->string('shipper_name')->nullable();
            $table->timestamp('payment_date')->nullable();
            $table->timestamp('shipped_date')->nullable();
            $table->string('tracking_number')->nullable();
            $table->unsignedInteger('tax_total_cents')->default();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
