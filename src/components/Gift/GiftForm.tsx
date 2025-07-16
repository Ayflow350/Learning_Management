"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

// === START: THIS IS THE FIX ===
// 1. Define the type for the PaymentMethod props
type PaymentMethodProps = {
  id: string;
  brand: string;
  last4: string;
  expiry: string;
  name: string;
  iconUrl: string;
};

// 2. Apply the type to the component's props
const PaymentMethod = ({
  id,
  brand,
  last4,
  expiry,
  name,
  iconUrl,
}: PaymentMethodProps) => (
  // === END: THIS IS THE FIX ===
  <Label
    htmlFor={id}
    className="flex cursor-pointer items-center justify-between rounded-lg border w-auto max-w-[648px] border-gray-200 p-4 [&:has([data-state=checked])]:border-green-500 [&:has([data-state=checked])]:ring-2 [&:has([data-state=checked])]:ring-green-500/50"
  >
    <div className="flex items-center gap-4">
      <RadioGroupItem value={id} id={id} />
      <Image src={iconUrl} alt={brand} width={36} height={24} />
      <p className="font-medium text-dark-text">
        {brand} **** **** **** {last4}
      </p>
    </div>
    <div className="flex items-center gap-8 text-sm text-gray-500">
      <span>{expiry}</span>
      <span>{name}</span>
    </div>
    {/* This is a clever trick to show/hide the checkmark based on the radio state */}
    <div className="opacity-0 transition-opacity [&:has(div[data-state=checked])]:opacity-100">
      <CheckCircle2 className="h-6 w-6 text-green-500" />
    </div>
  </Label>
);

const GiftForm = () => {
  return (
    <form className="space-y-12 ">
      {/* Recipient's Information */}
      <div className="space-y-6 ">
        <h2 className="text-xl font-semibold text-dark-text">
          Recipient&apos;s Information
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="w-auto max-w-[648px]">
            <Label htmlFor="fullName" className=" mb-2 mb:mb-4 ">
              Recipient&apos;s Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Full name"
              className="mt-1 h-12 rounded-none"
            />
          </div>
          <div className="w-auto max-w-[648px]">
            <Label htmlFor="email" className=" mb-2 mb:mb-4 ">
              Recipient&apos;s Email:
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Address"
              className="mt-1 h-12 rounded-none"
            />
          </div>
          <div className="w-auto max-w-[648px]">
            <Label htmlFor="message" className=" mb-2 mb:mb-4 ">
              Gift Message
            </Label>
            <Textarea
              id="message"
              placeholder="Add your personal message here..."
              className="mt-1 min-h-[120px] rounded-none"
            />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-dark-text">Payment Method</h2>
        <RadioGroup defaultValue="card-1" className="space-y-4">
          <PaymentMethod
            id="card-1"
            brand="VISA"
            last4="4855"
            expiry="04/24"
            name="Vako Shvili"
            iconUrl="/GiftCourse/Visa.svg"
          />
          <PaymentMethod
            id="card-2"
            brand="Mastercard"
            last4="5795"
            expiry="04/24"
            name="Vako Shvili"
            iconUrl="/GiftCourse/masterCard.svg"
          />

          <PaymentMethod
            id="card-3"
            brand="Paypal"
            last4="5795"
            expiry="04/24"
            name="Vako Shvili"
            iconUrl="/GiftCourse/Paypal.svg"
          />
          {/* ... other payment methods */}
        </RadioGroup>

        {/* New Payment Card Form */}
        <div className="rounded-lg border-1 hover:border-green-500 p-6  w-auto max-w-[648px]">
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/GiftCourse/creditCard.svg"
              alt="Credit Card"
              width={24}
              height={24}
            />
            <p className="font-semibold text-dark-text">New Payment Cards</p>
            <CheckCircle2 className="ml-auto h-6 w-6 text-green-500" />
          </div>
          <div className="space-y-4 ">
            <div className="w-auto max-w-[648px] text ">
              <Label htmlFor="cardName mb-2 md:mb-4   ">Name</Label>
              <Input
                id="cardName"
                placeholder="Name on card"
                className=" h-12   mt-2 md:mt-4 placeholder:text-sm"
              />
            </div>
            <div className="w-auto max-w-[648px]">
              <Label htmlFor="cardNumber ">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="Label"
                className=" h-12   mt-2 md:mt-4 placeholder:text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">MM / YY</Label>
                <Input
                  id="expiry"
                  placeholder="MM / YY"
                  className=" h-12   mt-2 md:mt-4 placeholder:text-sm"
                />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="Security Code"
                  className=" h-12   mt-2 md:mt-4 placeholder:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remember Card */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="remember-card"
          className="border-primary data-[state=checked]:bg-primary"
        />
        <Label
          htmlFor="remember-card"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Remember this card, save it on my card list
        </Label>
      </div>
      <div className="h-5"></div>
    </form>
  );
};

export default GiftForm;
