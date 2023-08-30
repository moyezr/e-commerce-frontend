import React from "react";
import Wrapper from "../components/Wrapper";
import success from "../public/assets/success.gif"
import Link from "next/link";
import Image from "next/image";

const Success = () => {
    return (
        <div className="flex items-center">
            <Wrapper className="py-8 pb-16">
            <Image
                width={200}
                height={200}
                className="mx-auto"
                src={success}
             />
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col text-center">
                    <div className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">shoeshopcontact@shop.com</div>

                    <Link href="/" className="font-bold mt-5 hover:opacity-50 bg-black text-white px-4 py-1 rounded-full max-w-fit mx-auto">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;