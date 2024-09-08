"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { toast } = useToast();
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  // console.log(data);

  const [desc, setDesc] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    setIsSending(true);
    try {
      await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        body: JSON.stringify({ desc, postSlug }),
      });
      handleSubmit;
      toast({
        title: "Send complete!",
        description: "Your comment has been successfully sent.",
        type: "success",
        duration: 3000, // Toast duration (in milliseconds)
      });
      setDesc("");
      mutate();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        duration: 3000, // Toast duration (in milliseconds)
      });
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="mt-[50px]">
      <h1 className="mb-[30px] font-semibold">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            placeholder="Write a comment..."
            className="p-[20px] w-[100%] border border-gray-400 rounded-sm"
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button onClick={handleSubmit}>
            {isSending ? "Sending..." : "Send"}
          </Button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      {/* Comments section */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item) => (
          <div className="mt-[50px]">
            <div className="mt-[50px]">
              <div className="flex items-center gap-[20px] mb-[20px]">
                <Image
                  src={item?.img}
                  alt="comment user"
                  width={50}
                  height={50}
                  className="rounded-sm"
                />
                <div className="flex flex-col gap-[5px]">
                  <span className="font-[500]">{item?.user.name}</span>
                  <span className="text-[14px]">{item?.desc}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default Comments;
