import React from 'react';

export const HeroCanvasSkeleton = () => (
  <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center bg-slate-200/80 dark:bg-slate-900/80 animate-pulse">
    <div className="flex flex-col items-center gap-4 text-slate-500 dark:text-slate-400">
      <div className="h-14 w-14 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
      <span className="text-sm tracking-widest uppercase">Loading 3D scene</span>
    </div>
  </div>
);

export const ProjectCardSkeleton = () => (
  <div className="group relative glass rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col h-full p-8 animate-pulse">
    <div className="h-44 rounded-3xl bg-slate-200 dark:bg-slate-800 mb-6" />
    <div className="h-6 w-3/4 rounded-full bg-slate-200 dark:bg-slate-800 mb-3" />
    <div className="h-4 w-1/3 rounded-full bg-slate-200 dark:bg-slate-800 mb-6" />
    <div className="space-y-3 flex-1">
      <div className="h-4 rounded-full bg-slate-200 dark:bg-slate-800" />
      <div className="h-4 rounded-full bg-slate-200 dark:bg-slate-800 w-5/6" />
      <div className="h-4 rounded-full bg-slate-200 dark:bg-slate-800 w-4/6" />
    </div>
    <div className="mt-8 grid grid-cols-2 gap-3">
      <div className="h-10 rounded-2xl bg-slate-200 dark:bg-slate-800" />
      <div className="h-10 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    </div>
  </div>
);

export const ContactFormSkeleton = () => (
  <div className="absolute inset-0 z-10 rounded-3xl bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl p-8 flex flex-col gap-4">
    <div className="flex items-center justify-between gap-4">
      <div className="h-6 w-40 rounded-full bg-slate-200 dark:bg-slate-800" />
      <div className="h-6 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
      <div className="h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    </div>
    <div className="h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    <div className="h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    <div className="h-14 rounded-2xl bg-slate-200 dark:bg-slate-800" />
    <div className="mt-auto h-12 rounded-2xl bg-slate-200 dark:bg-slate-800" />
  </div>
);
