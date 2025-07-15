"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";
import {
  Briefcase,
  Code,
  HandCoins,
  HeartPulse,
  Laptop,
  Megaphone,
  Music,
  Palette,
  Video,
  PersonStanding,
} from "lucide-react";

// --- Reusable Sub-Components for a Clean & Readable Structure ---

const CheckboxOption = ({
  id,
  label,
  count,
  defaultChecked = false,
}: {
  id: string;
  label: string;
  count: number;
  defaultChecked?: boolean;
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Checkbox
          id={id}
          checked={isChecked}
          onCheckedChange={() => setIsChecked(!isChecked)}
          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        />
        <label
          htmlFor={id}
          className={`cursor-pointer text-sm font-medium leading-none ${
            isChecked ? "text-primary" : "text-gray-600"
          }`}
        >
          {label}
        </label>
      </div>
      <span className="text-sm text-gray-500">{count}</span>
    </div>
  );
};

const RatingOption = ({
  stars,
  count,
  defaultChecked = false,
}: {
  stars: number;
  count: number;
  defaultChecked?: boolean;
}) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Checkbox
          id={`rating-${stars}`}
          checked={isChecked}
          onCheckedChange={() => setIsChecked(!isChecked)}
          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        />
        <label
          htmlFor={`rating-${stars}`}
          className="flex cursor-pointer items-center gap-1 text-sm font-medium"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`transition-colors ${
                i < stars ? "text-amber-400 fill-amber-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-gray-600">& up</span>
        </label>
      </div>
      <span className="text-sm text-gray-500">{count}</span>
    </div>
  );
};

const FilterSection = ({
  value,
  title,
  children,
}: {
  value: string;
  title: string;
  children: React.ReactNode;
}) => (
  <AccordionItem
    value={value}
    className="border border-gray-200  w-full px-4 py-4"
  >
    <AccordionTrigger className="py-0 text-sm font-bold   uppercase text-dark-text hover:no-underline">
      {title}
    </AccordionTrigger>
    <AccordionContent className="pt-4">{children}</AccordionContent>
  </AccordionItem>
);

const CategoryItem = ({
  value,
  label,
  icon,
  children,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <AccordionItem value={value} className="border-none">
    <AccordionTrigger className="p-2 text-sm font-medium text-[#4E5566] hover:no-underline hover:bg-gray-100 [&[data-state=open]>svg:last-child]:text-primary">
      <div className="flex items-center gap-3">
        <div className="w-5">{icon}</div>
        <span>{label}</span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="space-y-3 pl-10 pt-3">
      {children}
    </AccordionContent>
  </AccordionItem>
);

// --- The Main Filter Sidebar Component ---

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([25, 75]);

  return (
    <div className="w-full  p-6 ">
      <Accordion
        type="multiple"
        defaultValue={[
          "category",
          "tools",
          "rating",
          "level",
          "price",
          "duration",
        ]}
        className="w-full space-y-4"
      >
        <FilterSection value="category" title="Category">
          <Accordion
            type="multiple"
            defaultValue={["development"]}
            className="w-full space-y-1 bg-blue-600"
          >
            <CategoryItem
              value="development"
              label="Development"
              icon={<Code size={20} />}
            >
              <CheckboxOption
                id="web-dev"
                label="Web Development"
                count={574}
              />
              <CheckboxOption
                id="data-science"
                label="Data Science"
                count={568}
              />
              <CheckboxOption
                id="mobile-dev"
                label="Mobile Development"
                count={1345}
                defaultChecked
              />
            </CategoryItem>
            <CategoryItem
              value="business"
              label="Business"
              icon={<Briefcase size={20} />}
            >
              <CheckboxOption
                id="entrepreneurship"
                label="Entrepreneurship"
                count={420}
              />
            </CategoryItem>
            <CategoryItem
              value="finance"
              label="Finance & Accounting"
              icon={<HandCoins size={20} />}
            >
              <CheckboxOption
                id="investing"
                label="Investing & Trading"
                count={950}
              />
            </CategoryItem>
            <CategoryItem
              value="it"
              label="IT & Software"
              icon={<Laptop size={20} />}
            >
              <CheckboxOption
                id="it-cert"
                label="IT Certification"
                count={1200}
              />
            </CategoryItem>
            <CategoryItem
              value="personal-dev"
              label="Personal Development"
              icon={<PersonStanding size={20} />}
            >
              <CheckboxOption id="leadership" label="Leadership" count={600} />
            </CategoryItem>
            <CategoryItem
              value="design"
              label="Design"
              icon={<Palette size={20} />}
            >
              <CheckboxOption id="ui-ux" label="UI/UX Design" count={950} />
            </CategoryItem>
            <CategoryItem
              value="marketing"
              label="Marketing"
              icon={<Megaphone size={20} />}
            >
              <CheckboxOption
                id="digital-marketing"
                label="Digital Marketing"
                count={1500}
              />
            </CategoryItem>
            <CategoryItem
              value="lifestyle"
              label="Lifestyle"
              icon={<Briefcase size={20} />}
            >
              <CheckboxOption id="gaming" label="Gaming" count={450} />
            </CategoryItem>
            <CategoryItem
              value="photo"
              label="Photography & Video"
              icon={<Video size={20} />}
            >
              <CheckboxOption
                id="photography"
                label="Photography"
                count={800}
              />
            </CategoryItem>
            <CategoryItem
              value="music"
              label="Music"
              icon={<Music size={20} />}
            >
              <CheckboxOption
                id="music-prod"
                label="Music Production"
                count={400}
              />
            </CategoryItem>
            <CategoryItem
              value="health"
              label="Health & Fitness"
              icon={<HeartPulse size={20} />}
            >
              <CheckboxOption id="fitness" label="Fitness" count={900} />
            </CategoryItem>
          </Accordion>
        </FilterSection>

        <FilterSection value="tools" title="Tools">
          <div className="space-y-3">
            <CheckboxOption
              id="webflow"
              label="Webflow"
              count={1345}
              defaultChecked
            />
            <CheckboxOption id="react" label="React" count={12738} />
          </div>
        </FilterSection>

        <FilterSection value="level" title="Course Level">
          <div className="space-y-3">
            <CheckboxOption id="all-level" label="All Level" count={1345} />
            <CheckboxOption id="beginner" label="Beginner" count={1345} />
            <CheckboxOption
              id="intermediate"
              label="Intermediate"
              count={1345}
            />
          </div>
        </FilterSection>

        <FilterSection value="rating" title="Rating">
          <div className="space-y-3">
            <RatingOption stars={3} count={1345} defaultChecked />
            <RatingOption stars={4} count={1345} />
          </div>
        </FilterSection>

        <FilterSection value="price" title="Price">
          <div className="px-1 pt-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={100}
              step={1}
            />
            <div className="mt-2 flex justify-between text-sm font-medium text-gray-700">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
            <RadioGroup defaultValue="all" className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="paid" />
                <label htmlFor="paid">Paid</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="free" />
                <label htmlFor="free">Free</label>
              </div>
            </RadioGroup>
          </div>
        </FilterSection>

        <FilterSection value="duration" title="Duration">
          <div className="space-y-3">
            <CheckboxOption
              id="d-3"
              label="1-3 Months"
              count={1345}
              defaultChecked
            />
            <CheckboxOption id="d-4" label="1-4 Weeks" count={1345} />
            <CheckboxOption id="d-5" label="1-7 Days" count={1345} />
          </div>
        </FilterSection>
        <div className="h-20"></div>
      </Accordion>
    </div>
  );
};

export default FilterSidebar;
