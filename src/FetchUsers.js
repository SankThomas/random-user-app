import React, { useState, useEffect } from 'react'
import { FaPhone, FaUserAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import moment from 'moment'

const url = `https://randomuser.me/api`

const FetchUsers = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = async () => {
    const resp = await fetch(url)
    const users = await resp.json()
    setUsers(users.results)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <section className="bg-gray-900 py-20 px-10 md:h-screen">
        {users.map((user) => {
          const {
            name: { title, first, last },
            location: {
              street: { number, name },
              city,
              state,
              country,
              postcode,
              coordinates: { latitude, longitude },
              timezone: { offset, description },
            },
            email,
            login: { uuid, username },
            dob: { date, age },
            phone,
            picture: { large },
          } = user

          return (
            <div
              key={uuid}
              className="bg-gray-200 px-5 py-10 rounded-lg lg:w-9/12 lg:mx-auto 2xl:w-1/2 2xl:px-10"
            >
              <img
                src={large}
                alt={first}
                className="block mx-auto rounded-full"
              />
              <div className="text-center">
                <h3 className="text-3xl my-3">
                  {title}. {first} {last}
                </h3>
                <p>
                  <span className="font-bold">DOB:</span>{' '}
                  {moment(`${date}`).format('MMMM Do YYYY')}
                </p>
                <p>{age} Years</p>
                <div className="underline mx-auto my-5"></div>
              </div>

              <div className="md:flex md:justify-between">
                <div>
                  <p className="flex items-center my-3">
                    <AiOutlineMail className="mr-2 text-xl" /> {email}
                  </p>
                  <p className="flex items-center my-3">
                    <FaUserAlt className="mr-2 text-xl" /> {username}
                  </p>
                  <p className="flex items-center my-3">
                    <FaPhone className="mr-2 text-xl" /> {phone}
                  </p>
                </div>

                <div className="mt-10 md:mt-0">
                  <ul>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Street:</span> {number},{' '}
                      {name}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Country:</span> {country}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">City:</span> {city}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">State:</span> {state}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Postal Code:</span> {postcode}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Latitude:</span> {latitude}
                    </li>
                    <li className="flex items-center justify-between my-3">
                      <span className="font-bold">Longitude:</span> {longitude}
                    </li>
                    <li>
                      <span className="font-bold">Timezone:</span> {offset},{' '}
                      {description}
                    </li>
                  </ul>
                </div>
              </div>
              <button
                onClick={() => fetchUserData()}
                className="block mx-auto mt-5 bg-gray-900 text-white py-1 px-4 rounded-lg transition-colors hover:bg-gray-600"
              >
                Next Person
              </button>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default FetchUsers
