import React from 'react';
import styles from '../field.scss';
import { Input } from '../../input/basic-input/input/input.component';
import { useFieldConfig } from '../../patient-registration-context';
import { useTranslation } from 'react-i18next';

export const NameField = () => {
  const { t } = useTranslation();

  const fieldConfigs = useFieldConfig('name');
  return (
    <div>
      <h4 className={styles.productiveHeading02Light}>{t('fullNameLabelText')}</h4>
      <Input id="givenName" name="givenName" labelText={t('givenNameLabelText')} light />
      {fieldConfigs.displayMiddleName && (
        <Input id="middleName" name="middleName" labelText={t('middleNameLabelText')} light />
      )}
      <Input id="familyName" name="familyName" labelText={t('familyNameLabelText')} light />
    </div>
  );
};
