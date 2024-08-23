import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="mt-[50px]">
      <h1 className="mb-[30px]">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            placeholder="Write a comment..."
            className="p-[20px] w-[100%] border border-gray-400 rounded-sm"
          ></textarea>
          <Button>Send</Button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      {/* Comments section */}
      <div className="mt-[50px]">
        <div className="mt-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image
              src="/coding.png"
              alt=""
              width={50}
              height={50}
              className="rounded-sm"
            />
            <div className="flex flex-col gap-[5px]">
              <span className="font-[500]">Brook Tinnapat</span>
              <span className="text-[14px]">
                Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Alias exercitationem enim neque libero quo odio blanditiis
                laboriosam cum dolorum, possimus maxime impedit et provident id
                similique quis deserunt voluptatibus a!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="mt-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image
              src="/coding.png"
              alt=""
              width={50}
              height={50}
              className="rounded-sm"
            />
            <div className="flex flex-col gap-[5px]">
              <span className="font-[500]">Brook Tinnapat</span>
              <span className="text-[14px]">
                Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Alias exercitationem enim neque libero quo odio blanditiis
                laboriosam cum dolorum, possimus maxime impedit et provident id
                similique quis deserunt voluptatibus a!
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="mt-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image
              src="/coding.png"
              alt=""
              width={50}
              height={50}
              className="rounded-sm"
            />
            <div className="flex flex-col gap-[5px]">
              <span className="font-[500]">Brook Tinnapat</span>
              <span className="text-[14px]">
                Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Alias exercitationem enim neque libero quo odio blanditiis
                laboriosam cum dolorum, possimus maxime impedit et provident id
                similique quis deserunt voluptatibus a!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
