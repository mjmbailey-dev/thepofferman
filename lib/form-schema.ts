import * as z from "zod";

export interface ActionResponse<T = any> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  reason: z.string().min(1, "Please select an item"),
  name: z.string({ error: "This field is required" }),
  "togglegroup-preferred-method": z
    .array(z.string(), { error: "Please select at least one item" })
    .min(1, "Please select at least one item"),
  "input-mobile": z.string().regex(/^04\d{8}$/,{
    error: "Please enter a valid phone number",
  }).optional(),
  email: z.email({ error: "Please enter a valid email" }).optional(),
  message: z.string({ error: "This field is required" }),
  "datepicker-event-date": z.array(z.date({ error: "This field is required" })),
  "select-event-size": z.string().min(1, "Please select an item"),
  "textarea-event-description": z
    .string({ error: "This field is required" })
    .optional(),
}).superRefine((values, ctx) => {
    const preferred = values["togglegroup-preferred-method"] ?? [];

    if (preferred.includes("email") && !values.email) {
      ctx.addIssue({
        code: "custom",
        path: ["email"],
        message: "Email is required when Email is selected",
      });
    }

    if (preferred.includes("mobile") && !values["input-mobile"]) {
      ctx.addIssue({
        code: "custom",
        path: ["input-mobile"],
        message: "Mobile is required when Mobile is selected",
      });
    }
});
