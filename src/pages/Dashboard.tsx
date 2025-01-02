import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/Sidebar'

function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);
  

  return (
    <div className=''>
      <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />
      <Sidebar />
      <div className="p-4 ml-72 h-screen bg-gray-100 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          All Notes
          <div className="flex gap-4 justify-center items-center">
            <Button variant='secondary'  startIcon={<ShareIcon />} text='Share Brain' />
            <Button variant='primary' startIcon={<PlusIcon />} text='Add Content' onClick={()=>{ setModalOpen(true); }} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card title="First YT video" type="youtube" link="https://www.youtube.com/watch?v=n_E3bLYuQBo"></Card>
          <Card title="First Tweet" type="twitter" link="https://x.com/freshbarbiedolz/status/1874458386395513082"></Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
