"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {sidebarLinks} from "@/constants";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const Siderbar = ({user}: SiderbarProps) => {
    const pathName = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 flex cursor-pointer item-center gap-2">
                    <Image src="/icons/logo.svg" alt="Logo" width={34} height={34} className="size-[34px] max-xl:size-14"/>
                    <h1 className="sidebar-logo">Pecun</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                    return (
                        <Link href={item.route} key={item.label} className={cn("sidebar-link", {"bg-bank-gradient": isActive})}>
                            <div className="relative size-6">
                                <Image src={item.imgURL} alt={item.label} fill className={cn({"brightness-[3] invert-0": isActive})}/>
                            </div>
                            <p className={cn("sidebar-label", {"!text-white": isActive})}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
                USER
            </nav>
            FOOTER
        </section>
    );
};

export default Siderbar;