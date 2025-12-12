"use client";
import * as z from "zod";
import { formSchema } from "@/lib/form-schema";
import { serverAction } from "@/actions/form-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { useAction } from "next-safe-action/hooks";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import {
  Field,
  FieldGroup,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldSeparator,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import BrandButton from "./BrandButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon, X } from "lucide-react";

type Schema = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
  });
  const formAction = useAction(serverAction, {
    onSuccess: () => {
      // TODO: show success message
      form.reset();
    },
    onError: () => {
      // TODO: show error message
    },
  });
  const handleSubmit = form.handleSubmit(async (data: Schema) => {
    formAction.execute(data);
  });

  const reason = form.watch("reason");

 
    const email = (form.watch("togglegroup-preferred-method") ?? []).includes("email") 
    const mobile = (form.watch("togglegroup-preferred-method") ?? []).includes("mobile") 


  const { isExecuting, hasSucceeded } = formAction;
  if (hasSucceeded) {
    return (
      <div className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, stiffness: 300, damping: 25 }}
          className="h-full py-6 px-3"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 500,
              damping: 15,
            }}
            className="mb-4 flex justify-center border rounded-full w-fit mx-auto p-2"
          >
            <Check className="size-8" />
          </motion.div>
          <h2 className="text-center text-2xl text-pretty font-bold mb-2">
            Thank you
          </h2>
          <p className="text-center text-lg text-pretty text-muted-foreground">
            Form submitted successfully, we will get back to you soon
          </p>
        </motion.div>
      </div>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 sm:p-5 md:p-8 w-full rounded-md gap-2 border max-w-3xl mx-auto"
    >
        <FieldGroup className="grid md:grid-cols-6 gap-4 mb-6">
            <Controller
            name="reason"
            control={form.control}
            render={({ field, fieldState }) => {
                const options = [
                { label: "Event", value: "event" },
                { label: "Markets", value: "markets" },
                { label: "Menu/Food", value: "menu_food" },
                { label: "General", value: "general" },
                ];
                return (
                <Field
                    data-invalid={fieldState.invalid}
                    className="gap-1 col-span-full"
                >
                    <FieldLabel htmlFor="reason">Reason for Contact *</FieldLabel>

                    <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
                );
            }}
            />
        </FieldGroup>
        <FieldSeparator className="my-4 col-span-full" />
        <FieldGroup>
            <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
                <Field
                data-invalid={fieldState.invalid}
                className="gap-1 col-span-full"
                >
                <FieldLabel htmlFor="name">Your Name *</FieldLabel>
                <Input
                    {...field}
                    id="name"
                    type="text"
                    onChange={(e) => {
                    field.onChange(e.target.value);
                    }}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your name"
                />

                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
            />
            

            <Controller
            name="togglegroup-preferred-method"
            control={form.control}
            render={({ field, fieldState }) => {
                const options = [
                { value: "email", label: "Email" },
                { value: "mobile", label: "Mobile" },
                ];
                return (
                <Field
                    data-invalid={fieldState.invalid}
                    className="gap-1 [&_p]:pb-2 col-span-full"
                >
                    <FieldLabel htmlFor="togglegroup-preferred-method">
                    Preferred Contact Method *
                    </FieldLabel>
                    <FieldDescription>
                    How would you like us to contact you?
                    </FieldDescription>
                    <ToggleGroup
                    variant="outline"
                    value={
                        // wrap in array and flat because value can be a string or an array
                        [field.value].flat().filter((val) => val !== undefined)
                    }
                    onValueChange={field.onChange}
                    type="multiple"
                    className="flex justify-start items-center flex-wrap"
                    >
                    {options.map(({ label, value }) => (
                        <ToggleGroupItem
                        key={value}
                        value={value}
                        className="flex items-center gap-x-2"
                        >
                        {label}
                        </ToggleGroupItem>
                    ))}
                    </ToggleGroup>
                    {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                    )}
                </Field>
                );
            }}
            />

            <AnimatePresence>
                {email && 
                <motion.div
                    key={"email-field"}
                    layout
                    initial={{opacity: 0, height:0 }}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity:0, height:0}}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden">
                    <Controller
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field
                        data-invalid={fieldState.invalid}
                        className="gap-1 col-span-full"
                        >
                        <FieldLabel htmlFor="email">Your Email *</FieldLabel>
                        <Input
                            {...field}
                            id="email"
                            type="text"
                            onChange={(e) => {
                                field.onChange(e.target.value);
                            }}
                            aria-invalid={fieldState.invalid}
                            placeholder="Enter your email"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                    />
                </motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {mobile && 
                <motion.div
                    key={"mobile-field"}
                    layout
                    initial={{opacity: 0, height:0 }}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity:0, height:0}}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden">
                    <Controller
                    name="input-mobile"
                    control={form.control}
                    render={({ field, fieldState }) => (
                    <Field
                        data-invalid={fieldState.invalid}
                        className="gap-1 col-span-full"
                    >
                        <FieldLabel htmlFor="input-mobile">Mobile *</FieldLabel>
                        <Input
                        {...field}
                        id="input-mobile"
                        type="text"
                        onChange={(e) => {
                            field.onChange(e.target.value);
                        }}
                        aria-invalid={fieldState.invalid}
                        placeholder="04XX XXX XXX"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                    )}
                />
                </motion.div>
                }
            </AnimatePresence>

            <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
                <Field
                data-invalid={fieldState.invalid}
                className="gap-1 col-span-full"
                >
                <FieldLabel htmlFor="message">Message *</FieldLabel>
                <Textarea
                    {...field}
                    aria-invalid={fieldState.invalid}
                    id="message"
                    placeholder="Enter your message"
                />
                <FieldDescription>
                    The more descriptive the better we can answer
                </FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
            )}
            />
        </FieldGroup>


        {/* Event Group */}
        <AnimatePresence initial={false}>
        {reason === "event" && (
        <motion.div
            key={"event-fields"}
            layout
            initial={{opacity: 0, height:0 }}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity:0, height:0}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
            >
        <FieldGroup className="grid md:grid-cols-6 gap-4 mb-6">
        <FieldSeparator className="my-4 col-span-full" />

        <Controller
          name="datepicker-event-date"
          control={form.control}
          render={({ field, fieldState }) => {
            const selectedDate = field.value;
            const mode = "multiple";
            return (
              <Field
                data-invalid={fieldState.invalid}
                className="col-span-full"
              >
                <FieldLabel htmlFor="datepicker-event-date">
                  Pick a date for the event *
                </FieldLabel>
                <FieldDescription>
                  The estimated dates requesting to be booked.
                </FieldDescription>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative">
                      <Button
                        type="button"
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-start font-normal active:scale-none",
                          !selectedDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="size-4" />
                        { selectedDate?.length 
                        ? selectedDate.length === 1
                            ? format(selectedDate[0], "dd/MM/yyyy")
                            : `${format(selectedDate[0], "dd/MM/yyyy")} +${selectedDate.length - 1} more`
                            : <span>Select a date</span>
                        }
                      </Button>
                      {fieldState.isDirty && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute top-1/2 end-0 -translate-y-1/2 rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            form.resetField("datepicker-event-date");
                          }}
                        >
                          <X />
                        </Button>
                      )}
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="multiple"
                      selected={selectedDate}
                      onSelect={(newDate = []) => {
                        form.setValue(field.name, newDate, {
                          shouldDirty: true,
                        });
                      }}
                    />
                  </PopoverContent>
                </Popover>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />

        <Controller
          name="select-event-size"
          control={form.control}
          render={({ field, fieldState }) => {
            const options = [
              { value: "1-50", label: "1-50" },
              { value: "51-100", label: "51-100" },
              { value: "100+", label: "100+" },
            ];
            return (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-1 col-span-full"
              >
                <FieldLabel htmlFor="select-event-size">
                  Size of Event *
                </FieldLabel>
                <FieldDescription>
                  A rough size of the amount of people attending the event to be
                  catered for.
                </FieldDescription>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            );
          }}
        />

        <Controller
          name="textarea-event-description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="gap-1 col-span-full"
            >
              <FieldLabel htmlFor="textarea-event-description">
                Event description{" "}
              </FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                id="textarea-event-description"
                placeholder="Describe your event"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      
    </motion.div>
    )} 
    </AnimatePresence>
      <div className="flex justify-end items-center w-full">
        <BrandButton variant={'muted'}>Reset</BrandButton>
        <BrandButton>{isExecuting ? "Submitting..." : "Submit"}</BrandButton>
      </div>
    </form>
  );
}
