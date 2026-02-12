type AnalyticsEvent = {
    category: string;
    action: string;
    label?: string;
  };
  
  export function trackEvent({ category, action, label }: AnalyticsEvent) {
    console.log("[Analytics]", { category, action, label });
  
    // GA4 example:
    // window.gtag?.("event", action, {
    //   event_category: category,
    //   event_label: label,
    // });
  }