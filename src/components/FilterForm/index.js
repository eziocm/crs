import React from 'react';

function FilterForm() {
  return (
    <div>
      <form>
        <div className="input-block">
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" />
        </div>
      </form>
    </div>
  );
}

export default FilterForm;
