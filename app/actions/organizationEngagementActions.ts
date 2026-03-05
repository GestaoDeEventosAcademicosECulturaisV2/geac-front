"use server";

import { cookies } from "next/headers";
import {
  OrganizationDashBoardDTO,
  OrganizationEngagementDTO,
  OrganizationPopularityDTO,
} from "@/types/organizationEngagement";
import { API_URL } from "./configs";

export async function getAllOrganizationEngagement(): Promise<
  OrganizationEngagementDTO[]
> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) return [];

    const response = await fetch(`${API_URL}/views/organization-engagement`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Erro ao buscar engajamento de organizações:",
        response.status,
      );
      return [];
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na getAllOrganizationEngagement:", error);
    return [];
  }
}
export async function getOrganizationDashBoard(): Promise<OrganizationDashBoardDTO> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) throw new Error("Erro no token");

    const response = await fetch(`${API_URL}/views/organization-dashboard`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Erro ao buscar engajamento de organizações:",
        response.status,
      );
      throw new Error("erro ve no console ai");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na getAllOrganizationEngagement:", error);
    throw new Error("erro ve no console ai");
  }
}

export async function getTop5MostEvents(): Promise<
  OrganizationPopularityDTO[]
> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) throw new Error("Erro no token");

    const response = await fetch(`${API_URL}/views/organization-topevents`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        "Erro ao buscar  organizações com mais eventos:",
        response.status,
      );
      throw new Error("erro ve no console ai");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao uscar organizacsoes com mais eventos", error);
    throw new Error("erro ve no console ai");
  }
}
export async function getTop5Engajament(): Promise<
  OrganizationPopularityDTO[]
> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) throw new Error("Erro no token");

    const response = await fetch(
      `${API_URL}/views/organization-topengagement`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error(
        "Erro ao buscar  organizações com mais pessoas nos eventos:",
        response.status,
      );
      throw new Error("erro ve no console ai");
    }

    return await response.json();
  } catch (error) {
    console.error(
      "Erro ao uscar organizacsoes com mais pessoaass nos envetos",
      error,
    );
    throw new Error("erro ve no console ai");
  }
}
