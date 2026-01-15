import type { Express } from "express";
import type { Server } from "http";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, phone, industry, message } = req.body;

      console.log(
        `Attempting to send email to beratakay.98@hotmail.com for Contact form from ${name}`,
      );

      if (resend) {
        const { data, error } = await resend.emails.send({
          from: "e-Brochure <onboarding@resend.dev>",
          to: "ebrochure0@gmail.com",
          subject: `New Contact Request from ${name}`,
          html: `
            <h3>New Contact Request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Industry:</strong> ${industry}</p>
            <p><strong>Message:</strong> ${message}</p>
            <hr>
            <p>Note: Sent to ebrochure0@gmail.com
 because beratakay.98@hotmail.com is not verified in Resend.</p>
          `,
        });

        if (error) {
          console.error("Resend API Error:", error);
          return res.status(500).json({ message: error.message });
        }

        console.log("Resend Success Data:", data);
      } else {
        console.warn("Resend client not initialized - check RESEND_API_KEY");
      }

      res.status(201).json({ success: true });
    } catch (err) {
      console.error("Unexpected error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/templates", async (req, res) => {
    try {
      const { name, email, requestDetails } = req.body;

      console.log(
        `Attempting to send email to beratakay.98@hotmail.com for Template Request from ${name}`,
      );

      if (resend) {
        const { data, error } = await resend.emails.send({
          from: "e-Brochure <onboarding@resend.dev>",
          to: "ebrochure0@gmail.com",
          subject: `New Custom Template Request from ${name}`,
          html: `
            <h3>New Custom Template Request</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Request Details:</strong> ${requestDetails}</p>
            <hr>
            <p>Note: Sent to ebrochure0@gmail.com
 because beratakay.98@hotmail.com is not verified in Resend.</p>
          `,
        });

        if (error) {
          console.error("Resend API Error (Templates):", error);
          return res.status(500).json({ message: error.message });
        }

        console.log("Resend Success Data (Templates):", data);
      } else {
        console.warn("Resend client not initialized - check RESEND_API_KEY");
      }

      res.status(201).json({ success: true });
    } catch (err) {
      console.error("Unexpected error (Templates):", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
