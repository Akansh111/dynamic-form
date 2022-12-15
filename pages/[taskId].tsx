import { useRouter } from 'next/router';
import { useLayoutEffect, useMemo, useState } from 'react';
import Button from '../components/0_atoms/button';
import { useFormData } from '../components/0_atoms/store/useFormData';
import { useServerData } from '../components/0_atoms/store/useServerData';
import CreateForm from '../components/2_organisms/createForm';

export default function TaskPage() {
  const router = useRouter();
  const [data, setData] = useState<any>({});

  const formData = useFormData((s) => s.formData);
  const addNewFormData = useFormData((s) => s.addNewFormData);
  const serverData = useServerData((s) => s.serverData);
  const setServerData = useServerData((s) => s.setServerData);

  const taskId = useMemo(() => {
    return router.query.taskId;
  }, [router.query.taskId]);

  useLayoutEffect(() => {
    fetch(`/api/json/${taskId}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        addNewFormData(d);
      });
  }, [addNewFormData, taskId]);

  const handlePreviousForm = () => {
    router.push(`/${data?.previousTaskId}`);
  };

  const handleNextForm = () => {
    router.push(`/${data?.nextTaskRef}`);
  };

  return (
    <div>
      <h1>Task {taskId}</h1>

      {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}

      <CreateForm />

      <div className='flex flex-row mx-auto prose'>
        {data?.previousTaskId && data.previousTaskId !== '' && (
          <Button onClick={handlePreviousForm} className=''>
            Previous
          </Button>
        )}
        {data?.nextTaskRef && data.nextTaskRef !== '' && (
          <Button onClick={handleNextForm} className='ml-auto'>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
