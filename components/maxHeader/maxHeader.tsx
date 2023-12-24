"use client";
import React, { useEffect, useState } from "react";
import "./maxHeader.scss";
import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function maxHeader() {
	const [user, setUser] = useState<any>();
	const supabase = createClient();

	useEffect(() => {
		async function fetchUser() {
			const UserData = (await supabase.auth.getUser()).data.user?.user_metadata;
			setUser(UserData);
		}
		fetchUser();
	}, []);
	async function Logout() {
		const logout = await supabase.auth.signOut();
		window.location.reload();
	}
	return (
		<div className="flex justify-between px-6 shadow-sm h-[80px] w-full sticky top-0">
			<div className="logo flex items-center">
				<h1 className="font-bold space-x-1 mr-4">DOSE-SHOP</h1>
				<Header />
			</div>
			<div className="login h-full items-center flex">
				{user ? (
					<div className="outline-none">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<div onClick={Logout} className="flex">
									<h3 className="flex items-center border-r-black-600 border-r-[1px] mr-4 pr-4 font-bold text-sm">
										{user.full_name}
									</h3>
									<img
										src={user.avatar_url}
										alt=""
										className="rounded-full h-[40px]"
									/>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>Cart</DropdownMenuItem>
								<DropdownMenuItem onClick={Logout}>Logout</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				) : (
					<Link href="/login">login</Link>
				)}
			</div>
		</div>
	);
}
