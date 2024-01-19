"use client"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type User = {

}
export default function Component() {
    const [user, setUser] = useState<any>({

    });
	const supabase = createClient();

    useEffect(() => {
        async function fetchUser() {
            const UserData = (await supabase.auth.getUser()).data.user?.user_metadata;
            setUser(UserData);
        }
        fetchUser()
    }, []) 

  return (
    <div className="flex flex-col items-center justify-center space-y-4 min-h-[80vh]">
      <Avatar className="h-24 w-24">
        <AvatarImage alt="@shadcn" src={user?.avatar_url} />
        <AvatarFallback>Unknown</AvatarFallback>
      </Avatar>
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">{user?.full_name}</h1>
        <p className="text-gray-500 dark:text-gray-400">@{user?.preferred_username}</p>
        <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
      </div>
    </div>
  )
}

