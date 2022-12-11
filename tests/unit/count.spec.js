
import CountView from '@/components/CountView'
import { render, fireEvent } from '@testing-library/vue';

 describe('CountView.vue', () => {

  
  it('button click should increment the count text', async () => {
    const { getByText } = render(CountView);
    getByText('Count: 1');
    const addButton = getByText('+1');
    // Click the Add button.
    await fireEvent.click(addButton);
    getByText('Count: 2');
    await fireEvent.click(addButton);
    await fireEvent.click(addButton);
    await fireEvent.click(addButton);
    await fireEvent.click(addButton);
    getByText('Count: 6');
  })

  it('button click should increment the count text by 10', async () => {
    const { getByText } = render(CountView);
    getByText('Count: 1');
    const addButton = getByText('+10');
    await fireEvent.click(addButton);
    await fireEvent.click(addButton);
    getByText('Count: 21');
  })

  it('button click should decrement the count text by 10', async () => {
    const { getByText } = render(CountView);
    getByText('Count: 1');
    const minusButton = getByText('-10')
    await fireEvent.click(minusButton);
    await fireEvent.click(minusButton);
    getByText('Count: -19');
  })


  it('button click should decrement the count text by 1', async () => {
    const { getByText } = render(CountView);
    getByText('Count: 1');
    const minusButton = getByText('-1')
    await fireEvent.click(minusButton);
    await fireEvent.click(minusButton);
    getByText('Count: 0');
  })

  it('reset count', async () => {
    const { getByText } = render(CountView);
    getByText('Count: 1');
    const minusby10 = getByText('-10')
    const addButtonby1 = getByText('+1');
    const addButtonby10 = getByText('+10');
    const reset = getByText('reset')
    await fireEvent.click(addButtonby10);
    getByText('Count: 11');
    await fireEvent.click(reset);
    getByText('Count: 0')
    await fireEvent.click(addButtonby1);
    getByText('Count: 1');
    await fireEvent.click(reset);
    getByText('Count: 0')
    await fireEvent.click(minusby10);
    getByText('Count: -10');
    await fireEvent.click(reset);
    getByText('Count: 0')
  })

})