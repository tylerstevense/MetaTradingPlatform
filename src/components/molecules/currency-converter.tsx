"use client";

import { FormEvent } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

const CurrencyConvertor = () => {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);
  };
  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-[20px]">
      <div className="input-style">
        <label>Select currency</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>...</SelectLabel>
              <SelectItem value="BDT">BDT</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="CYN">CYN</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="AUD">AUD</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="input-style">
        <label>Convert to</label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>...</SelectLabel>
              <SelectItem value="BDT">BDT</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="CYN">CYN</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
              <SelectItem value="AUD">AUD</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="input-style">
        <label>Value</label>
        <input type="number" />
      </div>
      <div className="input-style">
        <input readOnly defaultValue="Result" className="text-center" />
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default CurrencyConvertor;
