"use client";

import { logOut } from "@/utils/fetchBase";

export default function LogoutButton() {
  return <button onClick={logOut}>Çıkış</button>;
}
