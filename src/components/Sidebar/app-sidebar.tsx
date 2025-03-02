"use client";

import * as React from "react";
import schoolLogo from "@/assets/school logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./sidebar-main";
import { GraduationCap, Users } from "lucide-react";

// This is sample data.
const data = {
  teams: [
    {
      name: "pilot-project",
      image: schoolLogo,
    },
  ],
  navMain: [
    {
      title: "Students",
      url: "#",
      icon: GraduationCap,
      isActive: true,
      items: [
        {
          title: "Add student",
          url: "/student/add-student",
        },
        {
          title: "Update student",
          url: "/student/edit-student",
        },
        {
          title: "All Students",
          url: "/student/all-students",
        },
        {
          title: "Student Details",
          url: "/student/student-details",
        },
        {
          title: "Student Dashboard",
          url: "/student/student-dashboard",
        },
      ],
    },
    {
      title: "Teacher",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Add Teacher",
          url: "/teacher/add-teacher",
        },
        {
          title: "Edit Teacher",
          url: "/teacher/edit-teacher",
        },
        {
          title: "All Teachers",
          url: "/teacher/all-teacher",
        },
        {
          title: "Teacher Dashboard",
          url: "/teacher/teacher-dashboard",
        },
        {
          title: "Teacher Details",
          url: "/teacher/teacher-details",
        },
      ],
    },
    {
      title: "Staff",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Add Staff",
          url: "/staff/add-staff",
        },
        {
          title: "Edit Staff",
          url: "/staff/edit-staff",
        },
        {
          title: "All Staffs",
          url: "/staff/all-staff",
        },
      ],
    },
    {
      title: "Human Resource",
      url: "#",
      icon: Users,
      items: [
        {
          title: "HR Dashboard",
          url: "/human-resource/hr-dashboard",
        },
      ],
    },
    {
      title: "Accountant",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Add Accountant",
          url: "/accountant/add-accountant",
        },
        {
          title: "Edit Accountant",
          url: "/accountant/edit-accountant",
        },
        {
          title: "All Accountants",
          url: "/accountant/all-accountant",
        },
      ],
    },
    {
      title: "Create Class Routine",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Add Class Routine",
          url: "/create_class_routine",
        },
        {
          title: "Edit Class Routine",
          url: "/edit_class_routine",
        }
      ],
    },
    {
      title: "Exam Schedule",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Add Exam Schedule",
          url: "/exam-schedule/add-exam-schedule",
        },
        {
          title: "Edit Exam Schedule",
          url: "/exam-schedule/edit-exam-schedule",
        }
      ],
    },
    {
      title: "Off Day Setup",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Add Off Day Setup",
          url: "/off-day-setup/add-off-day",
        },
        {
          title: "Edit Off Day Setup",
          url: "/off-day-setup/edit-off-day",
        }
      ],
    },
    {
      title: "Admin",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Class Routine",
          url: "/admin/class-routine",
        },
        {
          title: "Class Timings",
          url: "/admin/class-timings",
        },
      ],
    },
    {
      title: "Payroll",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "Employee Payroll",
          url: "/payroll/employee-payroll",
        },
      ],
    },
     
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" side="left" variant="inset" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="scrollBarThin">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
