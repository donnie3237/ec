"use client";
import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function Login({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	const Router  = useRouter()
	useEffect( ()=>{
		async function CheckAuth() {
		const supabase = createClient();
		const Session = await supabase.auth.getUser()
		const isSignin = Session.data.user
		if(isSignin){
			// Navigate.replace('/')
			Router.push('/')
			console.log(Session)
			console.log(isSignin)
		}
		}
		CheckAuth();
	})
	const signIn = () => {
		const supabase = createClient();

		supabase.auth.signInWithOAuth({
			provider: "github",
			options: {
				redirectTo: `${location.origin}/auth/callback`,
			},
		});
	};

	return (
		<div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
				<GithubIcon className="h-16 w-16 text-gray-900 dark:text-gray-100" />
					<h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">Sign in with GitHub</h1>
				<Button className="mt-6 flex items-center gap-2 px-6 py-2" variant="outline" onClick={signIn}>
					<GithubIcon className="h-5 w-5" />
					Sign in
				</Button>
				<Link className="mt-4 text-sm underline text-gray-600 dark:text-gray-400" href="#">
					Privacy Policy
				</Link>
			</div>
		</div>
	);
}

function GithubIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
