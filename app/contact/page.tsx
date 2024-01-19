/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rc4yaGFQEoX
 */
export default function Component() {
    return (
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We are a digital agency focused on delivering content and utility user-centric experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our History</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Founded in 2010, we've helped hundreds of companies around the world deliver digital products that delight
                their customers.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Mission</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our mission is to help businesses deliver digital products that delight their customers.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Values</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We value quality, innovation, and customer-centricity.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Team</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "100/100",
                      objectFit: "cover",
                    }}
                    width="100"
                  />
                  <h3 className="text-lg font-bold">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact Us</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                123 Street, City, State, Country
              </p>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">email@example.com</p>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    )
  }  