import {
  Briefcase,
  Users,
  Zap,
  Eye,
  SmileIcon as Tooth,
  Heart,
  Umbrella,
  Clock,
  Calendar,
  Building,
  GraduationCap,
  Dumbbell,
  Brain,
  Home,
  Bitcoin,
  UserCircle,
  PieChart,
  Coins,
  MonitorOff,
  Shield,
  UserPlus,
} from "lucide-react";

interface Benefit {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const benefits: Benefit[] = [
  { id: "401k", label: "Daily Wage", icon: <Briefcase className="w-3 h-3" /> },
  {
    id: "distributed",
    label: "Short-Term Projects",
    icon: <Users className="w-3 h-3" />,
  },
  { id: "async", label: "Seasonal Work", icon: <Zap className="w-3 h-3" /> },
  {
    id: "vision",
    label: "Gig Opportunities",
    icon: <Eye className="w-3 h-3" />,
  },
  {
    id: "dental",
    label: "Weekend Work",
    icon: <Tooth className="w-3 h-3" />,
  },
  {
    id: "medical",
    label: "Night Shifts",
    icon: <Heart className="w-3 h-3" />,
  },
  {
    id: "unlimited_vacation",
    label: "Temporary Contracts",
    icon: <Umbrella className="w-3 h-3" />,
  },
  { id: "pto", label: "Apprenticeships", icon: <Clock className="w-3 h-3" /> },
  {
    id: "four_day",
    label: "On-Call Work",
    icon: <Calendar className="w-3 h-3" />,
  },
  {
    id: "401k_matching",
    label: "Piece Work",
    icon: <Coins className="w-3 h-3" />,
  },
  {
    id: "company_retreats",
    label: "Shift Work",
    icon: <Building className="w-3 h-3" />,
  },
  {
    id: "coworking_budget",
    label: "Casual Work",
    icon: <Building className="w-3 h-3" />,
  },
  {
    id: "learning_budget",
    label: "Overtime Work",
    icon: <GraduationCap className="w-3 h-3" />,
  },
  {
    id: "gym",
    label: "Weekend Work",
    icon: <Dumbbell className="w-3 h-3" />,
  },
  {
    id: "mental_wellness",
    label: "Community Projects",
    icon: <Brain className="w-3 h-3" />,
  },
  {
    id: "home_office",
    label: "Event Support",
    icon: <Home className="w-3 h-3" />,
  },
  {
    id: "crypto",
    label: "Emergency Response",
    icon: <Bitcoin className="w-3 h-3" />,
  },
  {
    id: "pseudonymous",
    label: "Eco-Friendly Work",
    icon: <UserCircle className="w-3 h-3" />,
  },
  {
    id: "profit_sharing",
    label: "Urban Renewal",
    icon: <PieChart className="w-3 h-3" />,
  },
  {
    id: "equity",
    label: "Equity compensation",
    icon: <Coins className="w-3 h-3" />,
  },
  {
    id: "no_whiteboard",
    label: "No whiteboard interview",
    icon: <MonitorOff className="w-3 h-3" />,
  },
  {
    id: "no_monitoring",
    label: "No monitoring system",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    id: "hire_old_young",
    label: "We hire old (and young)",
    icon: <UserPlus className="w-3 h-3" />,
  },
];
