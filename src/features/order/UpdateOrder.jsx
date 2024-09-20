import React from 'react';
import Button from '../../ui/Buttton';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

// fether.Form is a custom component that will handle the form submission
// and will revalidate the form if there are errors.
export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make it a priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}
