import { useId, useState, type FormEvent } from "react";
import { subscribeToNewsletter } from "../../api/newsletter";
import { ArrowRightIcon } from "../ui/icons";
import styles from "./NewsletterForm.module.css";

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<SubmitState>({ status: "idle" });
  const inputId = useId();
  const messageId = useId();

  const isSubmitting = state.status === "submitting";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ status: "submitting" });

    try {
      await subscribeToNewsletter(email);
      setState({ status: "success" });
      setEmail("");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
      setState({ status: "error", message });
    }
  };

  let feedback: string | null = null;
  if (state.status === "success") feedback = "Thanks! You're on the list.";
  if (state.status === "error") feedback = state.message;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <div className={styles.field}>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-describedby={messageId}
          aria-invalid={state.status === "error" || undefined}
        />
        <button type="submit" disabled={isSubmitting} aria-label="Subscribe">
          {isSubmitting ? (
            <span className={styles.spinner} aria-hidden="true" />
          ) : (
            <ArrowRightIcon />
          )}
        </button>
      </div>
      <p
        id={messageId}
        className={`${styles.message} ${state.status === "error" ? styles.error : styles.success}`}
        aria-live="polite"
      >
        {feedback}
      </p>
    </form>
  );
}
