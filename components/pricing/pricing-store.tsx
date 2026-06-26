"use client";

import {
  createContext,
  memo,
  useContext,
  useState,
  useSyncExternalStore,
  type ReactNode
} from "react";

import type { BillingPeriod, CurrencyCode } from "@/types/pricing";

type PricingState = {
  currency: CurrencyCode;
  billing: BillingPeriod;
};

type PricingStore = {
  getSnapshot: () => PricingState;
  subscribe: (listener: () => void) => () => void;
  setCurrency: (currency: CurrencyCode) => void;
  setBilling: (billing: BillingPeriod) => void;
};

function createPricingStore(initialState: PricingState): PricingStore {
  let state = initialState;
  const listeners = new Set<() => void>();

  const emit = () => {
    listeners.forEach((listener) => listener());
  };

  return {
    getSnapshot: () => state,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    setCurrency: (currency) => {
      if (state.currency === currency) {
        return;
      }

      state = { ...state, currency };
      emit();
    },
    setBilling: (billing) => {
      if (state.billing === billing) {
        return;
      }

      state = { ...state, billing };
      emit();
    }
  };
}

const PricingStoreContext = createContext<PricingStore | null>(null);

type PricingProviderProps = {
  children: ReactNode;
};

export function PricingProvider({ children }: PricingProviderProps) {
  const [store] = useState(() =>
    createPricingStore({
      currency: "USD",
      billing: "monthly"
    })
  );

  return <PricingStoreContext.Provider value={store}>{children}</PricingStoreContext.Provider>;
}

function usePricingStore() {
  const store = useContext(PricingStoreContext);

  if (store === null) {
    throw new Error("Pricing store must be used within PricingProvider.");
  }

  return store;
}

export function usePricingSnapshot() {
  const store = usePricingStore();
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getSnapshot);
}

export function usePricingActions() {
  const store = usePricingStore();
  return {
    setCurrency: store.setCurrency,
    setBilling: store.setBilling
  };
}

export const PricingMemo = memo(function PricingMemo({ children }: { children: ReactNode }) {
  return <>{children}</>;
});
