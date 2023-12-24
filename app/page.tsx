import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import { Input } from "@/components/ui/input";
import useSWR from "swr";


export default async function Index() {
	const cookieStore = cookies();
 
	return <div>hello!</div>

}
