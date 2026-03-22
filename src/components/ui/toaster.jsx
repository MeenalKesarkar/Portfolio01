import { useToast } from "@/hooks/use-toast";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {

  const { toasts } = useToast();

  return (

    <ToastProvider>

      {toasts.map(function ({
        id,
        title,
        description,
        action,
        ...props
      }) {

        return (

          <Toast
            key={id}
            {...props}
            className="backdrop-blur-xl bg-gradient-to-br from-[#0f172a]/90 via-[#020617]/90 to-[#020617]/90 border border-white/10 text-white shadow-[0_10px_40px_rgba(0,0,0,0.4)] rounded-xl"
          >

            <div className="grid gap-1 pr-4">

              {title && (
                <ToastTitle className="text-base font-semibold tracking-wide text-white">
                  {title}
                </ToastTitle>
              )}

              {description && (
                <ToastDescription className="text-sm text-gray-300 leading-relaxed">
                  {description}
                </ToastDescription>
              )}

            </div>

            {action}

            <ToastClose />

          </Toast>

        );

      })}

      <ToastViewport />

    </ToastProvider>

  );

}