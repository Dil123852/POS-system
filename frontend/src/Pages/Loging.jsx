import { SignIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Package, Shield, Building2 } from "lucide-react";

export default function LoginPage() {
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  // 🔑 Redirect after login based on role
  useEffect(() => {
    if (isSignedIn && user) {
      const role = user?.publicMetadata?.role; 

      if (role === "admin") navigate("/admin/dashboard");
      else if (role === "cashier") navigate("/cashier/dashboard");
      else if (role === "staff") navigate("/staff/dashboard");
      else navigate("/unauthorized");
    }
  }, [isSignedIn, user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <div className="text-center md:text-left mb-12">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
              <Building2 className="h-12 w-12 text-white" />
              <Package className="h-16 w-16 text-yellow-300" />
              <Shield className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Aruna Super</h1>
            <p className="text-xl text-white/90 mb-2">Flow Track Inventory Management System</p>
            <p className="text-lg text-white/70">Employee Portal Access</p>
          </div>
          <div className="text-center md:text-left mt-6">
            <p className="text-white/70 text-sm">
              Need access? Contact your system administrator
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Clerk SignIn */}
        <div>
          <div className="clerk-signin-wrapper">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-white/95 backdrop-blur-sm border-0 shadow-xl",
                  headerTitle: "text-gray-800 text-xl font-semibold",
                  headerSubtitle: "text-gray-600",
                  socialButtonsBlockButton:
                    "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors",
                  formButtonPrimary:
                    "bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors",
                  formFieldInput:
                    "border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                  identityPreviewText: "text-gray-700",
                  identityPreviewEditButton: "text-purple-600 hover:text-purple-700",
                  footerActionText: "text-gray-600",
                  footerActionLink:
                    "text-purple-600 hover:text-purple-700 font-medium",
                },
              }}
              signUpUrl={null} // 🚫 disable signup (only admin creates accounts)
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm">
            FlowTrack Internal System • Secure Employee Portal • IT Support: ext. 1234
          </p>
        </div>
      </footer>
    </div>
  );
}
