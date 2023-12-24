import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
	createBrowserClient(
		"https://ajyovymocaxpatzpttkj.supabase.co",
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqeW92eW1vY2F4cGF0enB0dGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczMzA4NzUsImV4cCI6MjAwMjkwNjg3NX0.eUexdkUmgT4z3X9jHvKDF-GwULZx5G0sN1OChkRhzbA",
	);
