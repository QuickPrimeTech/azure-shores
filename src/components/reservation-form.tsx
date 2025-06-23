"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarIcon, Clock, Users, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

interface ReservationFormProps {
  isContactForm?: boolean;
}

export default function ReservationForm({
  isContactForm = false,
}: ReservationFormProps) {
  const [date, setDate] = useState<Date>();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);

    if (isContactForm) {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } else {
      setShowConfirmation(true);
    }
  };

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];

  const partySizes = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" required className="mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required className="mt-2" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" required className="mt-2" />
          </div>
        </div>

        {!isContactForm && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label>Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal mt-2"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label>Time *</Label>
                <Select required>
                  <SelectTrigger className="mt-2">
                    <Clock className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Party Size *</Label>
                <Select required>
                  <SelectTrigger className="mt-2">
                    <Users className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {partySizes.map((size) => (
                      <SelectItem key={size} value={size.toString()}>
                        {size} {size === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}

        {isContactForm && (
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" className="mt-2" />
          </div>
        )}

        <div>
          <Label htmlFor="message">
            {isContactForm ? "Message" : "Special Requests"}
          </Label>
          <Textarea
            id="message"
            placeholder={
              isContactForm
                ? "Tell us how we can help you..."
                : "Any dietary restrictions, special occasions, or seating preferences..."
            }
            className="mt-2 min-h-[120px]"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary text-lg py-4"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
              {isContactForm ? "Sending..." : "Processing..."}
            </>
          ) : isContactForm ? (
            "Send Message"
          ) : (
            "Reserve Table"
          )}
        </Button>
      </form>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center text-green-600">
              <CheckCircle className="w-6 h-6 mr-2" />
              Reservation Confirmed!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-600">
              Thank you for choosing Azure Shores! Your reservation has been
              confirmed.
            </p>
            <div className="bg-sand-beige-light rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Date:</span>
                <span>{date ? format(date, "PPP") : "TBD"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Confirmation #:</span>
                <span className="font-mono">
                  AS{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              A confirmation email has been sent to your email address. We look
              forward to welcoming you!
            </p>
            <Button
              onClick={() => setShowConfirmation(false)}
              className="w-full btn-primary"
            >
              Perfect!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
