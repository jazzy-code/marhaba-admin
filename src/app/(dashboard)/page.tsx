import { getServicesStats } from "@/api/services/services.server"

export default async function Page() {
  const stats = await getServicesStats()
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 min-h-full">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="font-serif text-2xl text-brown-dark font-medium">Dashboard</h1>
              <p className="text-warm-grey mt-2 font-sans text-sm">
                Overview of your portfolio performance and recent activity.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-sm shadow-sm border border-subtle-border dark:border-stone-800 p-6 flex flex-col justify-between h-40 group hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <span className="text-5xl font-serif text-brown-dark font-medium">{stats?.total || 0}</span>
              <div className="p-2 bg-stone-50 dark:bg-stone-800 rounded-full text-warm-grey">
                <i className="w-5 h-5" data-lucide="briefcase"></i>
              </div>
            </div>
            <span className="font-sans text-xs uppercase tracking-widest text-warm-grey font-semibold">
              Total Services
            </span>
          </div>
          <div className="bg-white rounded-sm shadow-sm border border-subtle-border dark:border-stone-800 p-6 flex flex-col justify-between h-40 group hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <span className="text-5xl font-serif text-brown-dark font-medium">{stats?.totalApproved || 0}</span>
              <div className="p-2 bg-stone-50 dark:bg-stone-800 rounded-full text-warm-grey">
                <i className="w-5 h-5" data-lucide="eye"></i>
              </div>
            </div>
            <span className="font-sans text-xs uppercase tracking-widest text-warm-grey font-semibold">
              Approved Services
            </span>
          </div>
          <div className="bg-white rounded-sm shadow-sm border border-subtle-border dark:border-stone-800 p-6 flex flex-col justify-between h-40 group hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <span className="text-5xl font-serif text-brown-dark font-medium">{stats?.totalRejected || 0}</span>
              <div className="p-2 bg-stone-50 dark:bg-stone-800 rounded-full text-warm-grey">
                <i className="w-5 h-5" data-lucide="mail"></i>
              </div>
            </div>
            <span className="font-sans text-xs uppercase tracking-widest text-warm-grey font-semibold">
              Rejected Services
            </span>
          </div>
          <div className="bg-white rounded-sm shadow-sm border border-subtle-border dark:border-stone-800 p-6 flex flex-col justify-between h-40 group hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-start">
              <span className="text-5xl font-serif text-brown-dark font-medium">{stats?.totalPending || 0}</span>
              <div className="p-2 bg-stone-50 dark:bg-stone-800 rounded-full text-warm-grey">
                <i className="w-5 h-5" data-lucide="clock"></i>
              </div>
            </div>
            <span className="font-sans text-xs uppercase tracking-widest text-warm-grey font-semibold">
              Pending Approvals
            </span>
          </div>
        </div>
        <div className="bg-white rounded-sm border mb-3 border-subtle-border dark:border-stone-800 shadow-sm flex flex-col">
          <div className="p-6 border-b border-subtle-border dark:border-stone-800 flex justify-between items-center">
            <h2 className="font-serif text-xl text-brown-dark font-medium">Recent Activity</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex items-start gap-4 p-6 border-b border-subtle-border dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors">
              <div className="mt-1 p-2 rounded-full bg-primary-gold/10 text-primary-gold shrink-0">
                <i className="w-4 h-4" data-lucide="mail"></i>
              </div>
              <div className="flex-1">
                <p className="font-sans text-brown-dark dark:text-stone-200 text-sm">
                  New inquiry for <span className="font-semibold">{"'Yacht Charter'"}</span> from{" "}
                  <span className="font-semibold">John Doe</span>
                </p>
                <p className="text-xs text-warm-grey mt-1">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border-b border-subtle-border dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors">
              <div className="mt-1 p-2 rounded-full bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 shrink-0">
                <i className="w-4 h-4" data-lucide="check-circle"></i>
              </div>
              <div className="flex-1">
                <p className="font-sans text-brown-dark dark:text-stone-200 text-sm">
                  Service <span className="font-semibold">{"'Luxury Villa'"}</span> status changed to Approved
                </p>
                <p className="text-xs text-warm-grey mt-1">Yesterday, 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 border-b border-subtle-border dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors">
              <div className="mt-1 p-2 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 shrink-0">
                <i className="w-4 h-4" data-lucide="clock"></i>
              </div>
              <div className="flex-1">
                <p className="font-sans text-brown-dark dark:text-stone-200 text-sm">
                  Changes to <span className="font-semibold">{"'Private Chauffeur Service'"}</span> submitted for review
                </p>
                <p className="text-xs text-warm-grey mt-1">Yesterday, 3:30 PM</p>
              </div>
            </div>
            {/* <div className="flex items-start gap-4 p-6 hover:bg-stone-50 dark:hover:bg-stone-800/30 transition-colors">
              <div className="mt-1 p-2 rounded-full bg-primary-gold/10 text-primary-gold shrink-0">
                <i className="w-4 h-4" data-lucide="mail"></i>
              </div>
              <div className="flex-1">
                <p className="font-sans text-brown-dark dark:text-stone-200 text-sm">
                  New inquiry for <span className="font-semibold">{"'Exclusive Catering'"}</span> from{" "}
                  <span className="font-semibold">Sarah Smith</span>
                </p>
                <p className="text-xs text-warm-grey mt-1">Oct 24, 2023</p>
              </div>
            </div> */}
          </div>
          <div className="border-t border-subtle-border dark:border-stone-800 bg-stone-50 dark:bg-stone-900 p-4 flex items-center justify-between rounded-b-sm">
            <span className="text-xs text-stone-500">Showing recent 4 of 24 Activities</span>
            <div className="flex gap-1">
              <button className="p-2 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 disabled:opacity-50">
                <i className="w-4 h-4" data-lucide="chevron-left"></i>
              </button>
              <button className="px-3 py-1 rounded-sm bg-primary-gold text-white text-xs font-medium shadow-sm">
                1
              </button>
              <button className="px-3 py-1 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium transition-colors">
                2
              </button>
              <button className="p-2 rounded-sm hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500">
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
