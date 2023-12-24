"use client";
import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
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
			<button onClick={signIn}>signin</button>
		</div>
	);
}
