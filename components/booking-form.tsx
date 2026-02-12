"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Nom requis (minimum 2 caractères)"),
  contact: z.string().min(3, "Email ou Instagram requis"),
  message: z.string().min(10, "Message trop court (minimum 10 caractères)"),
});

type FormData = z.infer<typeof formSchema>;

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error("Form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input
          {...register("name")}
          placeholder="Ton nom / Nom du projet"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          {...register("contact")}
          placeholder="Email ou @ Instagram"
          disabled={isSubmitting}
        />
        {errors.contact && (
          <p className="mt-1 text-sm text-red-400">{errors.contact.message}</p>
        )}
      </div>

      <div>
        <Textarea
          {...register("message")}
          placeholder="Ton message : booking, collab, projet..."
          disabled={isSubmitting}
          rows={5}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="default"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Envoi...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Envoyer</span>
          </>
        )}
      </Button>

      {submitStatus === "success" && (
        <p className="text-center text-sm text-neon-green">
          Message envoyé ! Je reviens vers toi rapidement. 🔥
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-center text-sm text-red-400">
          Erreur lors de l&apos;envoi. Réessaye ou contacte-moi sur WhatsApp.
        </p>
      )}
    </form>
  );
}
